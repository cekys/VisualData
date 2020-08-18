let mock = require('../mock/index')

let template = {
    'list|1-10': [{
        'id|+1': 1,
        'name': '@name'
    }]
}

mock.server('/mock', template)