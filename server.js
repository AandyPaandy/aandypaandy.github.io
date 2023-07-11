const express = require('express'); // require the package, within node_modules
const mongoose = require('mongoose')
const quote = require('./models/quoteModel.js');
const app = express()

var cors = require('cors')
app.use(cors())

app.get('/quote/:id', function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(80, function () {
    console.log('CORS-enabled web server listening to port 80')
})

// specify json middleware, app.use is used for middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// declaring routes
app.get('/', (req, res) => {
    res.send('Hello NODE API')
})  //request, response

app.get('/blog', (req, res) => {
    res.send('Hello blog, I\'m Andy')
})

app.listen(3000, () => {
    console.log(`Node API app is running on port 3000`)
})


app.post('/quote', async (req, res) => {
    try {
        const quote = await Quote.create(req.body);
        res.status(200).json(quote);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
})

// connecting with mongoDB
mongoose.set("strictQuery", false)
mongoose.connect('mongodb+srv://admin:123456789admin@andyapi.h3j00an.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(() => {
    console.log('Connected to MongoDB')
}).catch(() => {
   console.log(console.error)
})

// fetch or GET data from the database
app.get('/quote', async(req, res) => {
    try {
        const quote = await Quote.find({})
        res.status(200).json(quote)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// fetch quote by ID
app.get('/quote/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const quote = await Quote.findById(id)
        res.status(200).json(quote)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// Update or edit data in dB
app.put('/quote/:id', async (req,res) => {
    try {
        const {id} = req.params;
        const quote = await Quote.findByIdAndUpdate(id, req.body);
        if(!quote) {
            return res.status(404).json({message: `We cannot find the quote with id ${id}`})
        }
        const updatedQuote = await Quote.findById(id);
        res.status(200).json(updatedQuote)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// Remove of delete something from dB
app.delete('/quote/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const quote = await Quote.findByIdAndDelete(id);
        if (!quote) {
            return res.status(404).json({message: `We cannot find the quote with id ${id}`})
        }
        res.status(200).json(quote)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})
