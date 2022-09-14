const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000
const User = require('./config')
app.use(express.json())
app.use(cors())


app.get('/',async(req,res) => {
    const snapshot = await User.get();
    const users = []
    snapshot.forEach((doc) => {
        // console.log(doc.id, '=>', doc.data().nama);
        users.push({id:doc.id,user:doc.data()})
    });
    res.json(users)
})
app.post('/create',async(req,res) => {
    await User.add(req.body)
    res.send('data added')
})

app.listen(port,() => console.log('server is running'))