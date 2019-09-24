module.exports.register = (server, serviceLocator) => {

    server.post(
      {
        path: '/application'
      },
      (req, res, next) =>
        serviceLocator.get('applicationController').create(req, res, next)
    );
  
    server.get(
      {
        path: '/application/:id'
      },
      (req, res, next) =>
        serviceLocator.get('applicationController').get(req, res, next)
    );
};