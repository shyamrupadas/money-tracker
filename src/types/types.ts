export type CardType = {
  _id: number
  name: string
  sum: number
  actualDate: number
  __v: number
};

export type FinancialStatusType = {
  cards: CardType[]
  sum: number
  pending: boolean
  error: string | null
};