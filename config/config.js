module.exports = {
  development: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres'
  },
  test: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres'
  },
  production: {
    username: 'postgres', 
    password: 'AnakCompsie',
    host: 'db.naixjrzxdtwmkmybldts.supabase.co',
    port: 6543,
    database: 'postgres',
    dialect: 'postgres'
  }
};
