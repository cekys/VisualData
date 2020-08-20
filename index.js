let mock = require('../DataMock/index')
let express = require('express')

// express 服务器托管web文件
let app = express()
app.use('/web', express.static('public'))
let server = app.listen(80, function () {
    console.log('web server visit: http://localhost:' + server.address().port + '/web')
})

// 仿真器服务器
let gender = [
    {
        'gender': 'female',
        'count|1-1000': 1
    },
    {
        'gender': 'male',
        'count|1-1000': 1
    }]

let edu = [
    {
        'education': '学士',
        'count|1-1000': 1
    },
    {
        'education': '硕士',
        'count|1-1000': 1
    },
    {
        'education': '博士',
        'count|1-1000': 1
    }
]
mock.setServer('/mock/gender', gender)

mock.setServer('/mock/edu', edu)

mock.startServer(3000)