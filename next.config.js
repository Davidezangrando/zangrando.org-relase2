/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = module.exports = {
    apps : [{
      name: "next-app",
      script: "npm",
      args: "start",
      cwd: "/Users/davidezangrando/PROGRAMMAZIONE/CODING/Progetti/WebSite/sito/zangrando.org-relase2",
      watch: true,
      env: {
        NODE_ENV: "production",
      }
    }]
  };
