import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  // Next 16 writes AGENTS.md / CLAUDE.md into the repo root on dev start.
  agentRules: false,
};

export default nextConfig;
