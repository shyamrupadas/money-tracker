export type AccountType = {
  _id: string
  name: string
  sum: number
  actualDate: string
  __v: number
};

export type FinancialStatusType = {
  cards: AccountType[]
  sum: number
  pending: boolean
  error: string | null
};

export type authSliceType = {
  pending: boolean
  error: string
  isAuth: boolean
  currentUser: {
    userName: string
    id: string
  }
  jwt: string
};