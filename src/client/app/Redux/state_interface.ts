export interface State {
  tags: { title: string }[],
  tagStats: { title: string, amount: number }[]
}

export interface Action {
  type: String
}
