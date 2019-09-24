require('dotenv').config();
const config = require('./app/configs/configs')();
const restify = require('restify');

const serviceLocator = require('./app/configs/di');
const routes = require('./app/routes/routes');

const server = restify.createServer({
  name: config.app.name
});

const Database = require('./app/configs/database');
new Database(config.mongo.port, config.mongo.host, config.mongo.name);


server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(
  restify.plugins.bodyParser({
    mapParams: false
  })
);

routes.register(server, serviceLocator);

server.listen(config.app.port, () => {
  console.log(`${config.app.name} Server is running on port - ${config.app.port}`);
});