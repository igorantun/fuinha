'use strict';

/* Requires */
import test from 'ava';
import toType from 'to-type';
import Fuinha from './../lib';

/* Variables */
const html = '<title>Fuinha</title>';

/* Tests */
test('#this.selectors', async t => {
  let selector = () => {
    return {
      title: 'title'
    };
  };

  t.is(toType(new Fuinha().selectors), 'object', 'should be an object');
  t.is(new Fuinha({selectors: selector}).selectors.title, 'title', 'should equal the passed selector');

  t.is((await new Fuinha({selectors: 123}).run(html)).title, 'Fuinha', 'should use the default selector');
  t.is((await new Fuinha({selectors: selector}).run(html)).title, 'Fuinha', 'should use the passed selector');
});
