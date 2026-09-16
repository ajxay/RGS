import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  // Next 16 writes AGENTS.md / CLAUDE.md into the repo root on dev start.
  agentRules: false,

  // The partners page shipped at /partners before it was renamed to
  // /our-team, so keep the old URL working for anything already linking to it.
  async redirects() {
    return [{ source: "/partners", destination: "/our-team", permanent: true }];
  },
};

export default nextConfig;
