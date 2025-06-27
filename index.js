const express = require('express');
const connectDB = require('./utils/db.js');
const { PORT } = require('./utils/secret.js');
const app = express();
const fileupload = require('express-fileupload');

app.use(express.json());
app.use(express.static(__dirname + '/static'));
app.use(fileupload({}));
app.use(require('./middlewares/request-time.js'));

app.get('/', (req, res) => res.send('Hello World!'));
app.use('/api/users', require('./router/user.route.js'));
app.use('/api/auth', require('./router/auth.route.js'));

(async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Example app listening on port http://localhost:${PORT}`);
  });
})();
