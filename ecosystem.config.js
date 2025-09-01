const isWindows = process.platform === "win32";

module.exports = {
  apps: [
    {
      name: "FOODIELAND-FRONTEND",
      cwd: "./",
      script: isWindows ? "serve.cmd" : "serve",
      args: isWindows ? "-s build -l 3000" : "-s build --port 3000",
      watch: false,
      interpreter: isWindows ? "none" : undefined,
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
