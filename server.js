const express = require('express');
const path = require('path');

const app = express();

//view engine setup
app.set('views', path.join(__dirname, 'build'));
app.set('build', path.join(__dirname, 'static'));
app.set('view engine', 'ejs');

app.use(express.static('build'));

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname,'build/index.html'));
})

app.listen(process.env.PORT || 3001, ()=> {
    console.log('app is listening on port 3001!');
});
