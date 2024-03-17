module.exports = {
    apps : [{
      name: "next-app",
      script: "npm",
      args: "start",
      cwd: "/Users/davidezangrando/PROGRAMMAZIONE/CODING/Progetti/WebSite/sito",
      watch: true,
      env: {
        NODE_ENV: "production",
      }
    }]
  };