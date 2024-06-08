import { Sequelize } from "sequelize";
import Tasks from "./Tasks";

const sequelize = new Sequelize("tasks_db", "postgres", "qwerty", {
  host: "localhost",
  dialect: "postgres",
  port: 5432,
});

const modul = {
  sequelize: sequelize,
  tasks: Tasks(sequelize),
};

export default modul;
