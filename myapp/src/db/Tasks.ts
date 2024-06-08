import { Sequelize, DataTypes, Model } from "sequelize";

export interface TaskInstance extends Model {
  id: number;
  title: string;
  description?: string;
  status: "выполняется" | "выполнено";
  created_at: Date;
  updated_at: Date;
}

export default (sequelize: Sequelize) => {
  return sequelize.define<TaskInstance>(
    "Tasks",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          len: [3, 255],
        },
      },
      description: {
        type: DataTypes.TEXT(),
      },
      status: {
        type: DataTypes.STRING,
        validate: {
          isIn: [["выполняется", "выполнено"]],
        },
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    },
    {
      timestamps: false,
      tableName: "tasks",
    }
  );
};
