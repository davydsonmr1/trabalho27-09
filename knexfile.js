module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: '',
      database: 'trabalho02_db'
    },
    migrations: {
      directory: './src/database/migrations'
    },
    seeds: {
      directory: './src/database/seeds'
    }
  }
};