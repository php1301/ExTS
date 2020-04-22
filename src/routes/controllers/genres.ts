import * as express from "express";
import { Request, Response, NextFunction } from "express";
import Genre from "../../models/Genre";
export const getGenres = (req: Request, res: Response, next: NextFunction) => {
	Genre.findAll()
		.then((genres) => {
			res.status(200).json(genres);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
};
export const createGenres = (req: Request, res: Response, next: NextFunction) => {
	const { name, imageUrl } = req.body;
	const newGenre = Genre.build({ name, imageUrl });
	newGenre
		.save()
		.then((genre) => res.status(201).json(genre))
		.catch((err) => res.status(400).json(err));
};
