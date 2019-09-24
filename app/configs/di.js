const serviceLocator = require('../lib/service_locator');

serviceLocator.register('httpStatus', () => {
  return require('http-status');
});

serviceLocator.register('mongoose', () => {
  return require('mongoose');
});

serviceLocator.register('errs', () => {
  return require('restify-errors');
});

serviceLocator.register('applicationService', (serviceLocator) => {
  const mongoose = serviceLocator.get('mongoose');
  const httpStatus = serviceLocator.get('httpStatus');
  const errs = serviceLocator.get('errs');
  const ApplicationService = require('../services/applicationService');

  return new ApplicationService(mongoose, httpStatus, errs);
});

serviceLocator.register('applicationController', (serviceLocator) => {
  const httpStatus = serviceLocator.get('httpStatus');
  const applicationService = serviceLocator.get('applicationService');
  const ApplicationController = require('../controllers/applicationController');

  return new ApplicationController(applicationService, httpStatus);
});

module.exports = serviceLocator;