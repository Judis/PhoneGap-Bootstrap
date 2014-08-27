exports.config =
  
  framework: 'backbone'
  
  paths:
    public: 'www'
    watched: ['source']
  
  files:
    javascripts:
      defaultExtension: 'js'
      joinTo:
        'javascripts/app.js': /^source\/app/
        'javascripts/vendor.js': /^(source\/vendor|source\/bower_components)/
        'test/javascripts/test.js': /^source\/test[\\/](?!source\/vendor)/
        'test/javascripts/test-vendor.js': /^source\/test[\\/](?=source\/vendor)/
      order:
        before: [
          'source/vendor/scripts/jquery-2.1.1.js'
          'source/vendor/scripts/underscore.js'
          'source/vendor/scripts/backbone.js'
          'source/vendor/scripts/ratchet.js'
        ]
         
    stylesheets:
      defaultExtension: 'scss'
      joinTo: 
        'stylesheets/app.css': /^(source\/app|source\/vendor)/
        'test/stylesheets/test.css': /^source\/test/
      
    templates:
      defaultExtension: 'hbs'
      joinTo: 'javascripts/app.js'

  server:
    port: 8080

  plugins:
    afterBrunch: [
      'phonegap build ios'
    ]