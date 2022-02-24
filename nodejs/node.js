const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};

const mysql = require('mysql')
const con = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values('Fulano')`
con.query(sql)

let html = '<h1>Full Cycle Rocks!</h1>'
con.query("SELECT * FROM people", function (error, result, fields) {
    console.log(result)
    for (let index = 0; index < result.length; index++) {
        html += 'Nome: ' + result[index]['name'] + '<br>'        
    }
});
con.end()

app.get('/', (req,res) => {
    res.send(html)
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})