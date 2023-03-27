import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("financesdb", "lucassantos", "senhadificil", {
  host: "172.16.2.89",
  port: 5433,
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
