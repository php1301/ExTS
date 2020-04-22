import { Model } from "sequelize";
declare class Genre extends Model {
    id: number;
    name: string;
    imageUrl: string;
}
export default Genre;
