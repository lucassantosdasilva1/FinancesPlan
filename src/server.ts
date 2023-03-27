import express from "express";
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
import { router } from "./routes";

const app = express();
app.use(express.json());

// Definindo o prefixo de rota
const baseRoute = '/financesplan-api';

app.set('base', baseRoute);

// Middleware para adicionar o prefixo a todas as rotas
app.use(baseRoute, router);

app.listen(3333, () => {
  console.log("Server is running");
});

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Finances Plan API",
      version: "1.0.0",
      description: "API para gerenciamento de finanças pessoais",
      contact: {
        name: "Lucas Santos",
        url: "https://github.com/lucassantosdasilva1",
        email: "lucas.santos@exemplo.com",
      },
    },
    // servers: [
    //   {
    //     url: "http://localhost:3333",
    //     description: "Servidor de desenvolvimento",
    //   },
    // ],
  },
  apis: ["./swagger.js"],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
