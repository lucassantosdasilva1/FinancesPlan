import { Router } from "express";
import { TransactionController } from "../controller";

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
 *  */ 
router.get("/transactions", newTransaction.list);

router.post("/newTransaction", newTransaction.create);

router.put("/updateTransaction/:id", newTransaction.update);

router.delete("/deleteTransaction/:id", newTransaction.delete);
