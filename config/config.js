module.exports = {
  development: {
    url: process.env.DATABASE_URL,
  },
  test: {
    url: process.env.DATABASE_URL,
  },
  production: {
    username: 'postgres', 
    password: 'AnakCompsie',
    host: 'db.ffcjctqhmuwkqzylelku.supabase.co',
    port: 6543,
    database: 'postgres',
  }
};