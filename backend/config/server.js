module.exports = ({ env }) => ({
  host: env('HOST', 'http://api.nodejsng10f03.kinghost.net/'),
  port: env.int('PORT', 21075),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
