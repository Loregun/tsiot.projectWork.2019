var coap = require('coap')
var req = coap.request('coap://localhost/Lorenzo')


    req.on('response', function(res) {
        res.pipe(process.stdout)

    })

req.end()