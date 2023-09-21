const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');


describe('calculateNumber', () => {
  describe('SUM operation', () => {
    it('should round and add two positive numbers', () => {
      const result = calculateNumber('SUM', 5.3, 7.8);
      expect(result).to.equal(13);
    });

    it('should round and add two negative numbers', () => {
      const result = calculateNumber('SUM', -5.3, -7.8);
      expect(result).to.equal(-13);
    });
  });

  describe('SUBTRACT operation', () => {
    it('should round and subtract two positive numbers', () => {
      const result = calculateNumber('SUBTRACT', 5.3, 7.8);
      expect(result).to.equal(-3);
    });

    it('should round and subtract two negative numbers', () => {
      const result = calculateNumber('SUBTRACT', -5.3, -7.8);
      expect(result).to.equal(3);
    });
  });

  describe('DIVIDE operation', () => {
    it('should round and divide two positive numbers', () => {
      const result = calculateNumber('DIVIDE', 10, 3);
      expect(result).to.equal(3.3333333333333335);
    });

    it('should round and handle division by zero', () => {
      const result = calculateNumber('DIVIDE', 5.3, 0);
      expect(result).to.equal('Error');
    });
  });
});
