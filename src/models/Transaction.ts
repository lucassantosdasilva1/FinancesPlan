import { DataTypes, Model } from 'sequelize';
import { category, transactionType } from '../controller/@types';
import { sequelize as sequelizeConnection } from '../database/Connection';

export class Transaction extends Model {
  declare name: string;
  declare amount: number;
  declare type: transactionType;
  declare category: category;
  declare createdAt: Date;
  declare updatedAt: Date;
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
      type: DataTypes.ENUM('income', 'outcome'),
      allowNull: false,
    },
    category: {
      type: DataTypes.ENUM(
        'purchases',
        'food',
        'salary',
        'car',
        'leisure',
        'studies',
      ),
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize: sequelizeConnection,
    modelName: 'Transaction', // <- adicionado o nome do modelo aqui
    tableName: 'Transactions', // <- adicionado o nome da tabela aqui
  },
);
