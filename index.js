
require('babel-register');
const app = require('./src/app').app;
const PORT = process.env.PORT || 8000;
app.set('port', PORT);

app.listen(PORT, function() {
    console.log('Image search abstraction layer listening on port', PORT);
});

