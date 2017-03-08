'use strict';

/* Requires */
import test from 'ava';
import toType from 'to-type';
import Fuinha from './../lib';

/* Tests */
test('#this.format()', async t => {
  let formatter = v => {
    return v * 2;
  };

  t.is(toType(new Fuinha().format), 'function', 'should be a function');
  t.is(toType(new Fuinha({format: 123}).format), 'function', 'should be a function');
  t.is(toType(new Fuinha({format: formatter}).format), 'function', 'should be a function');

  t.is(new Fuinha().format(10), 10, 'should use the default formatter');
  t.is(new Fuinha({format: 123}).format(3), 3, 'should use the default formatter');

  t.is(new Fuinha({format: formatter}).format(3), 6, 'should use the passed formatter');
});
