var app = require('express')(); // Create an instance of an Express app

var mobileApp = require('azure-mobile-apps')(); // Create an instance of a Mobile App with default settings

mobileApp.tables.add('Account'); // Create a table for 'Book' with default settings
mobileApp.tables.add('Request');
mobileApp.tables.add('Transfer');

app.use(mobileApp);
app.listen(process.env.PORT || 3000);
