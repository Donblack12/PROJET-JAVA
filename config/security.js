module.exports.security = {

  cors: {
    allRoutes: true,
    allowOrigins: ['http://localhost:3000'],
    allowCredentials: true,
    allowRequestMethods: 'GET, POST, PUT, DELETE, OPTIONS, HEAD',
    allowRequestHeaders: 'content-type',
  },


};
