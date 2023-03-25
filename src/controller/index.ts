import { Request, Response } from "express";
import { Transaction } from "../models/Transaction";
import { INewTransacrtion } from "./@types";

export class TransactionController {
  //Criar novo produto
  async create(req: Request<{}, {}, INewTransacrtion>, res: Response) {
    const { name, amount, date, category, type }= req.body;

    const transaction = new Transaction();

    transaction.name = name;
    transaction.amount = amount;
    transaction.date = date;
    transaction.category = category;
    transaction.type = type;

    await transaction.save();

    return res.json(transaction);
  }

  //Listar Produtos
  async list(req: Request, res: Response) {
    try {
      const transaction = await Transaction.findAll();

      res.status(200).json(transaction);
    } catch (error) {
      res.status(500).json({ erro: error });
    }
  }

  //Atualiza produtobyID
  async update(req: Request, res: Response) {
    const idReq = req.params.id;

    const transactionexists = await Transaction.findByPk(idReq);
    if (!transactionexists) {
      res.status(422).json({ message: "Produto não encontrado!" });
      return;
    }

    try {
      console.log(req.body);

      await Transaction.update(
        {
          name: req.body.name,
          amount: req.body.amount,
          date: req.body.date,
          category: req.body.category,
          type: req.body.type,
        },
        {
          where: {
            id: idReq,
          },
        }
      );

      res.status(200).json({ message: "Transação alterada com sucesso!" });
    } catch (error) {
      res.status(500).json({ erro: error });
    }
  }

  //Apagar ProdutobyID
  async delete(req: Request, res: Response) {
    const idReq = req.params.id;

    console.log("idreq: ", idReq);

    const transactionexists = await Transaction.findByPk(idReq);

    if (!transactionexists) {
      res.status(422).json({ message: "Produto não encontrado!" });
      return;
    }

    try {
      await Transaction.destroy({
        where: {
          id: idReq,
        },
      });

      res.status(200).json({ message: "Transação removida com sucesso!" });
    } catch (error) {
      res.status(500).json({ erro: error });
    }
  }

  //Lista ByID
  async listById(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const transaction = await Transaction.findByPk(id);

      res.status(200).json(transaction);
    } catch (error) {}
  }
}
