'use strict';

const { Server } = require('@hapi/hapi');
const server = new Server({ port: 4000, host: 'localhost' });
const routes = require('./src/routes');

process.on('SIGTERM', () => server.stop());
process.on('SIGINT', () => server.stop());

server.route(routes);
server.start()
.then(() => console.log('Server running'));