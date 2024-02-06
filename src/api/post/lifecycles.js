const axios = require("axios");

module.exports = {
  async afterCreate(result, data) {
    axios.post(
      "https://api.vercel.com/v1/integrations/deploy/prj_Sr32kYhDI56BnBqNb0HKZMQvaoSX/9K6M5sjeet"
    );
  },
  async afterUpdate(result, params, data) {
    axios.post(
      "https://api.vercel.com/v1/integrations/deploy/prj_Sr32kYhDI56BnBqNb0HKZMQvaoSX/9K6M5sjeet"
    );
  },
};
