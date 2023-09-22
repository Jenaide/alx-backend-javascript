const getPaymentTokenFromAPI = require('./6-payment_token');
const expect = require('chai').expect;


describe('getPaymentTokenFromAPI', () => {
  it('should resolve with the correct data when success is true', (done) => {
    // first call the function with success = true
    getPaymentTokenFromAPI(true)
      .then((result) => {
        // Verify that the promise resolves with the correct data
        expect(result).to.deep.equal({ data: 'Successful response from the API' });
	done(); // Call done to indicate that the test is complete
      })
      // Call done with an error if the promise rejects
      .catch((error) => done(error));
  });
});
