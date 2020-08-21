let emulator = require('emulatorjs')
let express = require('express')

// express 服务器托管web文件
let app = express()
app.use('/web', express.static('public'))
app.listen(80)

// 仿真器服务器
let emu = new emulator.setup()
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


let edu = {
    'education': '@cfirst',
    'count|1-1000': 1
}

emu.set('/mock/gender', gender)

emu.set('/mock/edu', edu, 1, 100)

emu.start(3000)