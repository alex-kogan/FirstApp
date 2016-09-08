'use strict';

/**
 * Controller that renders our index (home) page.
 */
function index (request, response) {
  var contextData = {
    'pageTitle': 'Kognas in CH',
  };
  response.render('index.html', contextData);
}

module.exports = {
  index: index
};