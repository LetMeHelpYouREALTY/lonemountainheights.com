/**
 * Test: Claude API Rate Limiting Middleware
 * Critical path: AI API cost control and rate limiting
 */

import { beforeEach, describe, expect, it, vi } from "vitest";
import { rateLimitStore } from "./claude-rate-limit";

const defaultConfig = {
  requestsPerMinute: 10,
  tokensPerMinute: 100000,
  enabled: true,
};

describe("Claude Rate Limiting", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    rateLimitStore.reset();
  });

  it("allows requests within rate limit", async () => {
    const clientId = "client-1";

    const result1 = await rateLimitStore.checkLimit(clientId, defaultConfig);
    expect(result1.allowed).toBe(true);

    const result2 = await rateLimitStore.checkLimit(clientId, defaultConfig);
    expect(result2.allowed).toBe(true);

    const usage = rateLimitStore.getUsage(clientId);
    expect(usage.requestsLastMinute).toBe(2);
  });

  it("blocks requests exceeding rate limit", async () => {
    const clientId = "client-excessive";

    for (let i = 0; i < 10; i++) {
      const result = await rateLimitStore.checkLimit(clientId, defaultConfig);
      expect(result.allowed).toBe(true);
    }

    const blocked = await rateLimitStore.checkLimit(clientId, defaultConfig);
    expect(blocked.allowed).toBe(false);
    expect(blocked.retryAfter).toBeGreaterThan(0);
  });

  it("tracks different clients separately", async () => {
    const client1 = "client-1";
    const client2 = "client-2";

    for (let i = 0; i < 10; i++) {
      await rateLimitStore.checkLimit(client1, defaultConfig);
    }

    const blocked = await rateLimitStore.checkLimit(client1, defaultConfig);
    expect(blocked.allowed).toBe(false);

    const allowed = await rateLimitStore.checkLimit(client2, defaultConfig);
    expect(allowed.allowed).toBe(true);
  });

  it("tracks token usage", () => {
    const clientId = "client-tokens";
    rateLimitStore.trackTokens(clientId, 500);
    rateLimitStore.trackTokens(clientId, 250);

    const usage = rateLimitStore.getUsage(clientId);
    expect(usage.tokensLastMinute).toBe(2);
  });

  it("can be disabled via config", async () => {
    const clientId = "client-disabled";
    for (let i = 0; i < 20; i++) {
      const result = await rateLimitStore.checkLimit(clientId, {
        ...defaultConfig,
        enabled: false,
      });
      expect(result.allowed).toBe(true);
    }
  });

  it("returns retry-after when blocked", async () => {
    const clientId = "client-retry";
    for (let i = 0; i < 10; i++) {
      await rateLimitStore.checkLimit(clientId, defaultConfig);
    }

    const blocked = await rateLimitStore.checkLimit(clientId, defaultConfig);
    expect(blocked.allowed).toBe(false);
    expect(typeof blocked.retryAfter).toBe("number");
  });
});
