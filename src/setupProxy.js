const { createProxyMiddleware } = require('http-proxy-middleware');

const middleware = (app) => {
    app.use(
        '/coffee',
        createProxyMiddleware({
            target: 'https://1a75-122-179-97-243.ngrok.io/',
            changeOrigin: true,
        })
    );
};
module.exports = middleware;
