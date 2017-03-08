'use strict';

/* Requires */
import test from 'ava';
import toType from 'to-type';
import Fuinha from './../lib';

/* Variables */
const html = '<title>Fuinha</title>';

/* Tests */
test('#run()', async t => {
  t.is(toType(await new Fuinha().run(html)), 'object', 'should return an object');

  t.notThrows(new Fuinha().run(html), 'should accept strings');

  try {
    await new Fuinha().run(123);
  } catch (err) {
    t.is(err.name, 'TypeError', 'should throw a TypeError');
  }
});
