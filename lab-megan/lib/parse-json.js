'use strict';

module.exports = function(req) {
  return new Promise( (resolve, reject) => {
    if(req.method === 'POST' || req.method === 'PUT') {
      var body = '';
      console.log('reached inside parse-json.js, after first if\n');

      req.on('data', data => {
        console.log('before tostring');
        body += data.toString();
        console.log('after tostring');
      });

      req.on('end', () => {
        try {
          console.log(body);
          req.body = JSON.parse(body);
          resolve(req);
        } catch (err) {
          console.error(err);
          console.log('inside catch');
          reject(err);
        }
      });

      req.on('error', err => {
        console.log('inside error');
        console.error(err);
        reject(err);
      });

      return;
    }

    resolve();
  });
};
