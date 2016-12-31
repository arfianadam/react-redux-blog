import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { App, NotFound } from 'containers';

// eslint-disable-next-line import/no-dynamic-require
if (typeof System.import === 'undefined') System.import = module => Promise.resolve(require(module));

export default () =>

  /**
   * Please keep routes in alphabetical order
   */

  <Route path="/" component={App}>
    {/* Home (main) route */}
    <IndexRoute getComponent={() => System.import('./containers/Home/Home')} />

    {/* Routes */}
    <Route path="/new" getComponent={() => System.import('./containers/New/New')} />
    <Route path="/post/:id" getComponent={() => System.import('./containers/Single/Single')} />

    {/* Catch all route */}
    <Route path="*" component={NotFound} status={404} />
  </Route>;
