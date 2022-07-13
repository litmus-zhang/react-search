const { buildSchema } = require("graphql")



module.exports = new buildSchema(`
type Transaction{
    id: ID!
    receiver: String!
    description: String!
    amount: Int!
    date: String!
    trxType:TRXTYPE!
    status: STATUS!
}
enum STATUS{
    pending
    success
    failed
}
enum TRXTYPE{
    credit
    debit
}

input TransactionInput{
    receiver: String!
    description: String!
    amount: Int!
    date: String
    trxType: TRXTYPE = "credit"
    status: STATUS = "pending"
}

input Sort{
    date: String
    trxType: TRXTYPE
    status: STATUS
}


type RootQuery{
    getAllTransactions(sort : [Sort!]) : [Transaction!]!
}
type RootMutation{
    addTransaction(input: TransactionInput!): Transaction!
    deleteTransaction(id: ID!): Transaction!
}

schema{
    query: RootQuery
    mutation: RootMutation
}
`)