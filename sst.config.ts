// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./.sst/platform/config.d.ts" />
export default $config({
  app(input) {
    return {
      name: "portfolio-next",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
      providers: {
        cloudflare: { package: "@pulumi/cloudflare", version: "6.17.0" },
        aws: { package: "@pulumi/aws", version: "7.37.0" },
      },
    };
  },
  async run() {
    const web = new sst.aws.Nextjs("PortfolioWeb", {
      path: "./",
      domain:
        $app.stage === "production"
          ? {
              name: "mjacob.dev",
              dns: sst.cloudflare.dns({
                proxy: true,
              }),
            }
          : undefined,
    });
    return {
      siteUrl: web.url,
    };
  },
});
