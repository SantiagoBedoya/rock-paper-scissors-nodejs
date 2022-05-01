module.exports = {
  database: {
    client: 'mysql2',
    connection: {
      host: '127.0.0.1',
      port: '3306',
      user: 'root',
      password: 'root',
      database: 'rps',
    },
    migrations: {
      tableName: '_knex_migrations',
    },
  },
  server: {
    port: 3001,
  },
};
