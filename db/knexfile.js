const database = {
  host: '127.0.0.1',
  user: 'root',
  password: 'admin',
  database: 'sdaf_propuesta_permisos',
  port: 3600
}

module.exports = {
  development:{
    client: "mysql",
    connection: database,
  }
}
