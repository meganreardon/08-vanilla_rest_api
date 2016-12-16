'use strict';

module.exports = function(req) {
  return new Promise( (resolve, reject) => {
    // if(req.method === 'POST' || req.method === 'PUT' || req.method === 'DELETE') { // orig line
    if(req.method === 'POST' || req.method === 'PUT') {
      var body = '';

      req.on('data', data => {
        body += data.toString();
      });

      req.on('end', () => {
        try {
          req.body = JSON.parse(body);
          resolve(req);
        } catch (err) {
          console.error(err);
          reject(err);
        }
      });
      // NOTE BELOW BLOCK REMOVED FOR TROUBLESHOOTING
      // req.on('error', err => {
      //   console.error(err);
      //   reject(err);
      // });

      return;
    }

    resolve();
  });
};
