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
 * /newTransaction:
 *   post:
 *     summary: Cria uma nova transação
 *     tags: [Transactions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *            schema:
 *              type: object
 *              properties:
 *                name:
 *                  type: string
 *                  default: compra de sapato
 *                amount:
 *                  type: number
 *                  default: 100
 *                category:
 *                  type: string
 *                  default: purchases | food | salary | car | leisure | studies
 *                type:
 *                  type: string
 *                  default: income | outcome
 *      
 *     responses:
 *       201:
 *         description: Transação criada com sucesso
 *       400:
 *         description: Erro de validação dos dados
 *       500:
 *         description: Erro interno do servidor
 *
 * /updateTransaction/{id}:
 *   put:
 *     summary: Atualiza uma transação pelo ID
 *     tags: [Transactions]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: ID da transação
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *            schema:
 *              type: object
 *              properties:
 *                name:
 *                  type: string
 *                  default: compra de sapato
 *                amount:
 *                  type: number
 *                  default: 100
 *                category:
 *                  type: string
 *                  default: purchases | food | salary | car | leisure | studies
 *                type:
 *                  type: string
 *                  default: income | outcome
 *     responses:
 *       200:
 *         description: Transação encontrada com sucesso
 *       404:
 *         description: Transação não encontrada
 *       500:
 *         description: Erro interno do servidor
 * 
 * /deleteTransaction/{id}:
 *   delete:
 *     summary: Exclui uma transação pelo ID
 *     tags: [Transactions]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: ID da transação
 *     responses:
 *       200:
 *         description: Transação excluida com sucesso
 *       404:
 *         description: Transação não encontrada
 *       500:
 *         description: Erro interno do servidor
*/