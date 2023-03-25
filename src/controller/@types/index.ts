export type transactionType = "income" | "outcome";
export type category = "purchases" | "food" | "salary" | "car" | "leisure" | "studies";

export interface INewTransacrtion {
  name: string;
  amount: number;
  type: transactionType;
  category: category;
  date: Date;
}
