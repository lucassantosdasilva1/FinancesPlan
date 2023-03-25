import { Model, DataTypes } from "sequelize";
import { category, transactionType } from "../controller/@types";
import { sequelize } from "../database/Connection";

export class Transaction extends Model {
  declare name: string;
  declare amount: number;
  declare type: transactionType;
  declare category: category;
  declare date: Date;
}

Transaction.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM("income", "outcome"),
      allowNull: false,
    },
    category: {
      type: DataTypes.ENUM("purchases", "food", "salary", "car", "leisure", "studies"),
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  
  { sequelize }
);
