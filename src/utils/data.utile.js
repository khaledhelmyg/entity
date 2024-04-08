let resData = ({ message, status, ...result }) => {
  return {
    message,
    status,
    result: {
      result,
    },
  };
};
module.exports = {
  resData,
};
