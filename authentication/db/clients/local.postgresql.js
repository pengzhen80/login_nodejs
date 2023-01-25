const {Pool} = require('pg');

const pgLocalClient = new Pool(
    {
      database: 'authentication',
      host: 'localhost',
      port: 5432,
      user: 'pengzhen',
      password: 'pengzhen',
    },
);

module.exports = pgLocalClient;
