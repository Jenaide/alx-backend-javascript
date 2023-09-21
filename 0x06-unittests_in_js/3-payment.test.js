const { Utils } = require('./utils'); // Import the Utils module
const sinon = require('sinon'); // Import Sinon for spying
const sendPaymentRequestToApi = require('./3-payment');
const expect = require('chai').expect;


describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with type SUM', () => {
    const calcNumberSpy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    expect(calcNumberSpy.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(calcNumberSpy.calculateNumber.callCount).to.be.equal(1);
    calcNumberSpy.calculateNumber.restore();
  });
});
