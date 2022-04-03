const DrinksSchema = require('../models/drinksModel');
const fs = require('fs');

const getDrinks = async (req, res) => {
    try {
        const drinksSchema = await DrinksSchema.find();

        res.status(200).json(drinksSchema);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

const createDrink = async (req, res) => {
    try {
        const drink = new DrinksSchema({
            name: req.body.name,
            thumbnail: `http://localhost:${process.env.PORT}/api/thumbnails/${req.file.filename}`,
        });

        await drink.save();

        res.status(201).json(drink);
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
};

const updateDrink = async (req, res) => {
    try {
        DrinksSchema.findByIdAndUpdate({ _id: req.params.id }, req.body).then(
            function () {
                DrinksSchema.findOne({ _id: req.params.id }).then(function (
                    thumbnail
                ) {
                    if (req.file) {
                        DrinksSchema.thumbnail = thumbnail;
                    }

                    res.json(thumbnail);
                });
            }
        );
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

const deleteDrink = async (req, res) => {
    try {
        const drink = await DrinksSchema.findById(req.params.id);
        await drink.remove();

        res.status(200).send({ Success: 'Data deleted successfully' });
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

module.exports = {
    getDrinks,
    createDrink,
    updateDrink,
    deleteDrink,
};
