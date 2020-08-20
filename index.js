let emulator = require('../ceEmulator')
let express = require('express')

// express 服务器托管web文件
let app = express()
app.use('/web', express.static('public'))
app.listen(80)

// 仿真器服务器
let gender = [
    {
        'gender': 'female',
        'count|1-1000': 1
    },
    {
        'gender': 'male',
        'count|1-1000': 1
    },
]

let edu = []

for (let i = 0; i < 5; i++) {
    let obj = {
        'education': '@cfirst',
        'count|1-1000': 1
    }
    edu.push(obj)
}

emulator.set('/mock/gender', gender)

emulator.set('/mock/edu', edu)

emulator.start(3000)