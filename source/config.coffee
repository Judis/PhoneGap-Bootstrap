exports.config =
  
  framework: 'backbone'
  
  paths:
    public: '../www'
  
  files:
    javascripts:
      defaultExtension: 'js'
      joinTo:
        'javascripts/app.js': /^app/
        'javascripts/vendor.js': /^(vendor|bower_components)/
        'test/javascripts/test.js': /^test[\\/](?!vendor)/
        'test/javascripts/test-vendor.js': /^test[\\/](?=vendor)/
      order:
        before: [
          'vendor/scripts/jquery-2.1.1.js'
          'vendor/scripts/underscore.js'
          'vendor/scripts/backbone.js'
          'vendor/scripts/ratchet.js'
        ]
         
    stylesheets:
      defaultExtension: 'scss'
      joinTo: 
        'stylesheets/app.css': /^(app|vendor)/
        'test/stylesheets/test.css': /^test/
      
    templates:
      defaultExtension: 'hbs'
      joinTo: 'javascripts/app.js'

  server:
    port: 8080

  plugins:
    afterBrunch: [
      'phonegap build ios'
    ]