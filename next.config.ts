import type { NextConfig } from "next";

const isStaticExport = process.env.NEXT_EXPORT === "true";
const explicitBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const repository = process.env.GITHUB_REPOSITORY ?? "";
const repositoryName = repository.split("/")[1] ?? "";
const isUserOrOrgSite = repositoryName.endsWith(".github.io");
const computedBasePath =
  explicitBasePath ||
  (isStaticExport && repositoryName && !isUserOrOrgSite ? `/${repositoryName}` : "");

const nextConfig: NextConfig = {
  output: isStaticExport ? "export" : undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: computedBasePath,
  assetPrefix: computedBasePath || undefined,
};

export default nextConfig;
