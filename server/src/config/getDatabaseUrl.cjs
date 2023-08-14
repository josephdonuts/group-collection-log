const getDatabaseUrl = (nodeEnv) => {
  return (
    {
      development: "postgres://postgres:postgres@localhost:5432/group-collection-log_development",
      test: "postgres://postgres:postgres@localhost:5432/group-collection-log_test",
      e2e: "postgres://postgres:postgres@localhost:5432/group-collection-log_e2e",
    }[nodeEnv] || process.env.DATABASE_URL
  );
};

module.exports = getDatabaseUrl;
