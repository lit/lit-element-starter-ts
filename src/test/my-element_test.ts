import {MyElement} from '../my-element.js';

const assert = chai.assert;

suite('my-element', () => {

  test('is defined', () => {
    const el = document.createElement('my-element');
    assert.instanceOf(el, MyElement);
  });

});
