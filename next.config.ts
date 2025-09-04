import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  output: "export",

  basePath: isProd ? "/azalog" : "",
  assetPrefix: isProd ? "/azalog/" : "",

  webpack(config) {
    // 기존 svg 처리 로더 제거
    const fileLoaderRule = config.module.rules.find((rule: any) =>
      rule.test?.test?.(".svg")
    );
    fileLoaderRule.exclude = /\.svg$/;

    // SVGR 설정 추가
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
