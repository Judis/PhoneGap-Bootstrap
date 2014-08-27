Handlebars.registerHelper('t', function(key) {
  if (_.isUndefined(window.lang[window.language][key])) {
    return key;
  } else {
    return window.lang[window.language][key];
  }
});

Handlebars.registerHelper('empty', function(key) {
  if (_.isEmpty(key.toString())) {
    return 'Empty';
  } else {
    return key;
  }
});

Handlebars.registerHelper('field', function(name) {
  if (_.isUndefined(window.lang[window.language][name.replace('fields.', '')])) {
    return name.replace('fields.', '');
  } else {
    return window.lang[window.language][name.replace('fields.', '')];
  }
});
