import request from 'superagent';
import { prefix } from '../config/site.config.js';

const WebAPIUtils = {
  getBundle() {
    return new Promise((resolve, reject) => {
      request
          .get(prefix + '/get_bundle')
          .set('Content-Type', 'application/vnd.api+json')
          .end((err, res) => {
            if (res.ok) {
              resolve(JSON.parse(res.text));
            } else {
              reject(err);
            }
          });
    });
  },
  getRestaurantList(filter = {}) {
    return new Promise((resolve, reject) => {
      request
          .get(prefix + '/restaurant')
          .query(filter)
          .set('Content-Type', 'application/vnd.api+json')
          .end((err, res) => {
            if (res.ok) {
              resolve(JSON.parse(res.text));
            } else {
              reject(err);
            }
          });
    });
  },
};

export default WebAPIUtils;
