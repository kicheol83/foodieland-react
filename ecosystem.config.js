const isWindows = process.platform === "win32";

module.exports = {
  apps: [
    {
      name: "FOODIELAND-FRONTEND",
      script: isWindows ? "serve.cmd" : "serve",
      args: isWindows ? "-s build -l 3000" : "-s build -p 3000",
      watch: false,
      interpreter: isWindows ? "none" : undefined,
      env: {
        NODE_ENV: "production",
      },
      error_file: isWindows
        ? "C:/projects/foodieland-react/logs/err.log"
        : "/home/foodieland-project/foodieland-react/logs/err.log",
      out_file: isWindows
        ? "C:/projects/foodieland-react/logs/out.log"
        : "/home/foodieland-project/foodieland-react/logs/out.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss",
    },
  ],
};
