import * as express from "express";
import * as genreController from "../routes/controllers/genres";
const router = express.Router();
router.get("/genres", genreController.getGenres);
router.post("/genres", genreController.createGenres);
export default router;
