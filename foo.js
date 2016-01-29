'use strict';

require('./globals').setTimeout.call(window, function () {
  console.log('foo');
});