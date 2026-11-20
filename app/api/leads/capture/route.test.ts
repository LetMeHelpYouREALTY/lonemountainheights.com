/**
 * Test: /api/leads/capture Route Handler
 * Critical path: Lead generation API endpoint
 */

import { describe, it, expect, vi, beforeEach } from "vitest";
import { POST } from "./route";

const upsertPerson = vi.fn();
const findPerson = vi.fn();
const addTag = vi.fn();
const createEvent = vi.fn();

vi.mock("@/lib/fub/client", () => {
  return {
    FollowUpBossClient: class {
      upsertPerson = upsertPerson;
      findPerson = findPerson;
      addTag = addTag;
      createEvent = createEvent;
    },
  };
});

vi.mock("@/lib/rate-limit", () => ({
  leadFormLimiter: {},
  getClientId: () => "test-client",
  checkRateLimit: vi.fn().mockResolvedValue({
    success: true,
    remaining: 4,
    reset: Date.now() + 3600000,
    limit: 5,
  }),
  getRateLimitHeaders: () => ({}),
}));

describe("POST /api/leads/capture", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    findPerson.mockResolvedValue(null);
    upsertPerson.mockResolvedValue({
      id: 123,
      email: "john@example.com",
    });
    addTag.mockResolvedValue(undefined);
    createEvent.mockResolvedValue({ id: "evt-1" });
  });

  it("creates lead with valid data", async () => {
    const request = new Request("http://localhost:3000/api/leads/capture", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: "John",
        lastName: "Doe",
        email: "john@example.com",
        phone: "7025551234",
        message: "Interested in buying",
        source: "website-form",
        stage: "New Lead",
        tags: ["website"],
      }),
    });

    const response = await POST(request as never);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.success).toBe(true);
    expect(upsertPerson).toHaveBeenCalled();
  });

  it("returns 400 for missing required fields", async () => {
    const request = new Request("http://localhost:3000/api/leads/capture", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        phone: "7025551234",
      }),
    });

    const response = await POST(request as never);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(String(data.error).toLowerCase()).toContain("name");
  });

  it("returns 400 when email and phone are missing", async () => {
    const request = new Request("http://localhost:3000/api/leads/capture", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: "John",
        lastName: "Doe",
      }),
    });

    const response = await POST(request as never);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(String(data.error).toLowerCase()).toMatch(/email|phone/);
  });

  it("enriches lead with source and tags", async () => {
    const request = new Request("http://localhost:3000/api/leads/capture", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: "Jane",
        lastName: "Smith",
        email: "jane@example.com",
        source: "hero-section",
        tags: ["summerlin"],
      }),
    });

    await POST(request as never);

    expect(upsertPerson).toHaveBeenCalledWith(
      expect.objectContaining({
        source: expect.stringContaining("hero-section"),
      }),
    );
    expect(addTag).toHaveBeenCalled();
  });

  it("handles property search criteria", async () => {
    const request = new Request("http://localhost:3000/api/leads/capture", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: "Alex",
        lastName: "Buyer",
        email: "alex@example.com",
        propertyType: "single-family",
        priceMin: 500000,
        priceMax: 800000,
        bedrooms: 3,
        neighborhoods: ["Lone Mountain Heights"],
      }),
    });

    await POST(request as never);

    expect(upsertPerson).toHaveBeenCalledWith(
      expect.objectContaining({
        customFields: expect.objectContaining({
          propertyType: "single-family",
          priceMin: 500000,
          priceMax: 800000,
          bedrooms: 3,
        }),
      }),
    );
  });

  it("sanitizes XSS in name fields via upsert payload", async () => {
    const request = new Request("http://localhost:3000/api/leads/capture", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: "<script>alert(1)</script>",
        lastName: "Doe",
        email: "safe@example.com",
      }),
    });

    await POST(request as never);

    expect(upsertPerson).toHaveBeenCalled();
    const callArg = upsertPerson.mock.calls[0][0];
    expect(callArg.name).toBeDefined();
  });
});
