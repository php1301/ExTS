"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const genreController = require("../routes/controllers/genres");
const router = express.Router();
router.get("/genres", genreController.getGenres);
router.post("/genres", genreController.createGenres);
exports.default = router;
