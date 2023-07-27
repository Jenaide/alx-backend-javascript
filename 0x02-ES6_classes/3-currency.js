export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  //Getters
  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  // Setters
  set code(code) {
    if (typeof code === 'string') {
      this._code = code;
    } else {
      throw new TypeError('Code must be a string.');
    }
  }

  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TpeError('Name must be a string.');
    }
  }

  //method that will return the attributes
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
