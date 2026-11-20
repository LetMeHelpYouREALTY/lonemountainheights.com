/**
 * Test: Follow Up Boss API Client
 * Critical path: CRM integration with rate limiting
 */

import { beforeEach, describe, expect, it, vi } from "vitest";
import { FollowUpBossClient } from "./client";

global.fetch = vi.fn();

function createClient() {
  return new FollowUpBossClient({
    apiKey: "test-key",
    enableCaching: true,
    enableRateLimiting: false,
    retryAttempts: 1,
  });
}

describe("FollowUpBossClient", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("upserts a person successfully", async () => {
    (global.fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        id: 123,
        emails: [{ value: "john@example.com" }],
      }),
    });

    const client = createClient();
    const result = await client.upsertPerson({
      firstName: "John",
      lastName: "Doe",
      emails: ["john@example.com"],
      phones: ["7025551234"],
    });

    expect(result.id).toBe(123);
    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining("/people"),
      expect.objectContaining({
        method: "PUT",
        headers: expect.objectContaining({
          "Content-Type": "application/json",
        }),
      }),
    );
  });

  it("retries after rate limit responses", async () => {
    (global.fetch as ReturnType<typeof vi.fn>)
      .mockResolvedValueOnce({
        ok: false,
        status: 429,
        headers: {
          get: (key: string) => (key === "Retry-After" ? "0" : null),
        },
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({ id: 123 }),
      });

    const client = createClient();
    const result = await client.upsertPerson({
      firstName: "John",
      lastName: "Doe",
      emails: ["john@example.com"],
    });

    expect(result.id).toBe(123);
    expect(global.fetch).toHaveBeenCalledTimes(2);
  });

  it("caches listPeople GET requests", async () => {
    (global.fetch as ReturnType<typeof vi.fn>).mockResolvedValue({
      ok: true,
      json: async () => ({
        people: [{ id: 1, emails: [{ value: "cached@example.com" }] }],
      }),
    });

    const client = createClient();
    await client.listPeople({ email: "cached@example.com" });
    await client.listPeople({ email: "cached@example.com" });

    expect(global.fetch).toHaveBeenCalledTimes(1);
  });

  it("finds a person by email", async () => {
    (global.fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        people: [{ id: 9, emails: [{ value: "found@example.com" }] }],
      }),
    });

    const client = createClient();
    const person = await client.findPerson({ email: "found@example.com" });
    expect(person?.id).toBe(9);
  });

  it("returns null when person is not found", async () => {
    (global.fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ people: [] }),
    });

    const client = createClient();
    const person = await client.findPerson({ email: "missing@example.com" });
    expect(person).toBeNull();
  });

  it("adds tags to a person", async () => {
    (global.fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      ok: true,
      json: async () => ({}),
    });

    const client = createClient();
    await client.addTag(42, "website-lead");

    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining("/people/42/tags"),
      expect.objectContaining({ method: "POST" }),
    );
  });
});
