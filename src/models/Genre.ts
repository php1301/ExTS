import { Model, DataTypes } from "sequelize";
import { sequelize } from "../sequelize";
class Genre extends Model {
	id: number;
	name: string;
	imageUrl: string;
}
Genre.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		imageUrl: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		sequelize,
		modelName: "Genre",
		tableName: "Genre",
	}
);
export default Genre;
