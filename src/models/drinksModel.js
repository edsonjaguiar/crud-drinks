const { Schema, model } = require('mongoose');

const drinksSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Please, the thumbail field is required'],
            min: [3, 'Please, the minimum number of characters is 5'],
            max: [100, 'You have exceeded the allowed limits'],
            trim: true,
        },
        thumbnail: {
            type: String,
            required: [true, 'Please, the thumbail field is required'],
        },
    },
    { timestamps: true }
);

module.exports = model('Drinks', drinksSchema);
