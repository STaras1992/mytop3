const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const app = require('./App.js');
const searchRouter = require('./routes/searchRouter');

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Express server started on port ${PORT}`);
});
