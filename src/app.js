const express = require('express');
const app = express();
const port = 3000;
const postRouter = require('./routes/post')

/*routes*/
app.use('/posts', postRouter)

app.listen(port, () =>{
    console.log(`servidor levantado en el puerto ${port}`);
})