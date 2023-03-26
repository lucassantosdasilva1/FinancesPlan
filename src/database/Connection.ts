import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("financesdb", "lucassantos", "senhadificil", {
  host: "localhost",
  dialect: "postgres",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
