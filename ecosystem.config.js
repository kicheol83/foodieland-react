module.exports = {
  apps: [
    {
      name: "FOODIELAND-FRONTEND",
      script: "serve.cmd",
      args: "-s build -l 3000",
      watch: false,
      interpreter: "none",
      env: {
        NODE_ENV: "production",
      },
      error_file: "C:/projects/foodieland-react/logs/err.log",
      out_file: "C:/projects/foodieland-react/logs/out.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss",
    },
  ],
};
