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
  players: {
    host: 'localhost',
    port: 3002,
    protocol: 'http',
  },
  games: {
    host: 'localhost',
    port: 3001,
    protocol: 'http',
  },
  server: {
    port: 3000,
  },
  session: {
    secret: 'darth jarjar',
  },
};
