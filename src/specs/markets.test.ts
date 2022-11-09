import axios from 'axios';
import {assert} from 'chai';

describe('price data', () => {
  let response;

  before(async () => {
    response = await axios.get('https://api-pub.bitfinex.com/v2/ticker/tBTCUSD')
  });

  it('has 200 response code', () => {
    assert.equal(response.status, 200, 'the response code is not 200');
  });

  it('contains 10 values', () => {
    assert.equal(response.data.length, 10, 'number of values is not 10');
  });

  it('values should be numbers', () => {
    for (const value of response.data) {
      assert.isNumber(value, `value '${value}' is not a number`);
    }
  });
});
