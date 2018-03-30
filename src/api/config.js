const env = process.env;

module.exports = {
  port: env.PORT || 4242,
  host: env.HOST || "localhost",
  isDev: env.NODE_ENV !== "production",
  isBrowser: typeof window !== "undefined",

  mongoDbUrl: env.MONGODB_URL || "mongodb://localhost:27017",
  mongodDbName: env.MONGODB_NAME || "qc"
};
