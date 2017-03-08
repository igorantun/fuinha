'use strict';

/* Requires */
import test from 'ava';
import toType from 'to-type';
import Fuinha from './../lib';

/* Variables */
const html = '<title>Fuinha</title>';

/* Tests */
test('#this.filters', async t => {
  let filter = {
    test: () => {
      return 'Scraper';
    }
  };

  let selector = () => {
    return {
      title: 'title | test'
    };
  };

  t.is(toType(new Fuinha().filters), 'object', 'should be an object');
  t.is(toType(new Fuinha({filters: 123}).filters), 'object', 'should be an object');
  t.is(toType(new Fuinha({filters: filter}).filters), 'object', 'should be an object');

  t.is((await new Fuinha().run(html)).title, 'Fuinha', 'should use the default filter');
  t.is((await new Fuinha({filters: 123}).run(html)).title, 'Fuinha', 'should use the default filter');
  t.is((await new Fuinha({filters: filter, selectors: selector}).run(html)).title, 'Scraper', 'should use the passed filter');
});
