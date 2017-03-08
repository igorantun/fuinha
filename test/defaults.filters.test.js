'use strict';

/* Requires */
import test from 'ava';
import toType from 'to-type';
import {filters} from './../lib/helpers/defaults';

/* Tests */
const methods = [
  {name: 'slice', args: ['test string', 5, 8], expected: 'str'},
  {name: 'upperCase', args: ['test string'], expected: 'TEST STRING'},
  {name: 'lowerCase', args: ['TEST STRING'], expected: 'test string'},
  {name: 'trim', args: ['  test string \n'], expected: 'test string'},
  {name: 'replace', args: ['test string', 'test', 'new'], expected: 'new string'}
];

// Slice, UpperCase, LowerCase, Trim, Replace
methods.forEach(method => {
  test(`#${method.name}()`, t => {
    t.is(toType(filters[method.name](...method.args)), 'string', 'should return a string');
    t.is(filters[method.name](...method.args), method.expected, `should ${method.name} the string`);
    t.is(filters[method.name](123), 123, 'should return the original value');
  });
});

// Boolean
test('#boolean()', t => {
  t.is(toType(filters.boolean('test string')), 'boolean', 'should return a boolean');
  t.is(filters.boolean(undefined), false, 'should be false');
  t.is(filters.boolean('test'), true, 'should be true');
  t.is(filters.boolean(''), false, 'should be false');
  t.is(filters.boolean(1), true, 'should be true');
});
