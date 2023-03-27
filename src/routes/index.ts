import { Router } from "express";
import { TransactionController } from "../controller";
import cors from "cors";
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

export const router = Router();

const newTransaction = new TransactionController();

/**
 * @swagger
 * tags:
 *   name: Transactions
 *   description: API para gerenciamento de transações financeiras
 */

/**
 * @swagger
 * /transactions:
 *   get:
 *     summary: Retorna uma lista de transações
 *     tags: [Transactions]
 *     responses:
 *       200:
 *         description: Lista de transações retornada com sucesso
 *       500:
 *         description: Erro interno do servidor
 *
 *  */
const options = {
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  origin: "*",
};
router.use(cors(options));

router.get("/", (req, res) => {
  req.header;
  return res.send("Api is running");
});

router.get("/transactions", newTransaction.list);

router.post("/newTransaction", newTransaction.create);

router.put("/updateTransaction/:id", newTransaction.update);

router.delete("/deleteTransaction/:id", newTransaction.delete);


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
router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));