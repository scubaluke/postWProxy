const corsAnywhere = require('cors-anywhere')
const expressHttpProxy = require('express-http-proxy');
// const path = require('path');
const express = require('express');
const apicache = require('apicache');

const CORS_PROXY_PORT = 5000;

// CORS ANYWHERE SERVER 
corsAnywhere.createServer({})
    .listen(CORS_PROXY_PORT, () => console.log(`Internal CORS Anywhere server started prot ${CORS_PROXY_PORT}`))


    // express cache server 
let app = express()

// register cache middleware 
app.get('/*', cacheMiddleware())
// app.get('/', () => { res.sendFile(path.join(__dirname  + 'index.html'))})
app.post('/*', cacheMiddleware())
app.options('*/', cacheMiddleware())

// proxy to Cors server 
app.use(expressHttpProxy(`localhost:${CORS_PROXY_PORT}`));
 
const APP_PORT = process.env.PORT || 8080;

app.listen(APP_PORT, () => {
    console.log(`External CORS cache server started port: ${APP_PORT}`);
})

function cacheMiddleware() {
    const cacheOptions = {
        statusCodes: {  include: [200] },
        defaultDuration: 6000,
        appendKey: (req, res) => req.method
    };
    let cacheMiddleware = apicache.options(cacheOptions).middleware()
    return cacheMiddleware;
}