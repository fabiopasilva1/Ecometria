module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'ecostrapi'),
      user: env('DATABASE_USERNAME', 'presstencao'),
      password: env('DATABASE_PASSWORD', 'k2108f84'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
