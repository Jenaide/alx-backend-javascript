const getPaymentTokenFromAPI = (success) => {
  return success
  ? Promise.resolve({ data: 'Successful response from the API'})
  : new Promise((resolve) => {});
};

module.exports = getPaymentTokenFromAPI;
