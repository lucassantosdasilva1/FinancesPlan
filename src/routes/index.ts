import { Router } from "express";
import { TransactionController } from "../controller";

export const router = Router();

const newTransaction = new TransactionController();

router.get("/transactions", newTransaction.list);

router.post("/transaction", newTransaction.create);

router.put("/transaction/:id", newTransaction.update);

router.delete("/transaction/:id", newTransaction.delete);
