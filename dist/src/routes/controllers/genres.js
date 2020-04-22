"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Genre_1 = require("../../models/Genre");
exports.getGenres = (req, res, next) => {
    Genre_1.default.findAll()
        .then((genres) => {
        res.status(200).json(genres);
    })
        .catch((err) => {
        res.status(400).json(err);
    });
};
exports.createGenres = (req, res, next) => {
    const { name, imageUrl } = req.body;
    const newGenre = Genre_1.default.build({ name, imageUrl });
    newGenre
        .save()
        .then((genre) => res.status(201).json(genre))
        .catch((err) => res.status(400).json(err));
};
