import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("mjaptvlf", "mjaptvlf", "8sFuzL2qXzBvbnPSHiXmDQqAD4vFWP0G", {
  host: "heffalump.db.elephantsql.com",
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
