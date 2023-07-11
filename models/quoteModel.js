const mongoose = require('mongoose'); // anything that interacts with database


const quoteSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Please enter the book name"]
        },
        quote: {
            type: String,
            required: [true, "Please enter a quote"]
        },
        character: {
            type: String,
            required: [true, "Please enter the character that stated the quote"]
        },
        page: {
            type: Number,
            required: true,
        },
        author: {
            type: String,
            required: [true, "Please enter book authors name"]
        }
    },
    {
        timestamps: true
    }
)


const quote = mongoose.model("Quote", quoteSchema);
module.exports = quote;
