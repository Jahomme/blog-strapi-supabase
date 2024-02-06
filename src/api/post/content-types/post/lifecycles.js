const axios = require("axios");

module.exports = {
  async afterCreate(event) {
    const { result, data } = event;

    axios.post(
      "https://api.vercel.com/v1/integrations/deploy/prj_Sr32kYhDI56BnBqNb0HKZMQvaoSX/9K6M5sjeet"
    );
  },
  async afterUpdate(event) {
    const { result, params, data } = event;

    axios.post(
      "https://api.vercel.com/v1/integrations/deploy/prj_Sr32kYhDI56BnBqNb0HKZMQvaoSX/9K6M5sjeet"
    );
  },
};
