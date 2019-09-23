const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

require('dotenv').config();
require('./database');
app.set('port', process.env.PORT || 4000);
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(require('./routes/users'));
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
}); 