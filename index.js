import express from 'express';
const app = express();
import bodyParser from 'body-parser'
import { v4 as uuidv4 } from 'uuid';
// uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
import route from './router.js'

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use("/users", route)

app.get('/', (req, res) => {
  res.send('This is the index or / route');
});

app.listen(5000, () => console.log('port is listening on port 5000'));