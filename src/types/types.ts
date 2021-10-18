export type CardType = {
  id: number
  name: string
  sum: number
  actualDate: number
};

export type FinancialStatusType = {
  cards: CardType[]
  sum: number
};