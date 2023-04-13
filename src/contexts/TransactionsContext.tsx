import { ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'
import { createContext } from 'use-context-selector'

export interface Transaction {
  id: number
  tittle: string
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt: string
}

interface CreateTransactionInput {
  tittle: string
  price: number
  category: string
  type: 'income' | 'outcome'
}

interface TransactionContextType {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransactionInput) => Promise<void>
}

interface TransactionContextProviders {
  children: ReactNode
}

export const TransactionContext = createContext({} as TransactionContextType)

export const TransactionsProvider = ({
  children,
}: TransactionContextProviders) => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function fetchTransactions(query?: string) {
    const response = api.get('/transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })

    setTransactions((await response).data)
  }

  async function createTransaction(data: CreateTransactionInput) {
    const { tittle, price, category, type } = data

    const response = await api.post('transactions', {
      tittle,
      price,
      category,
      type,
      createdAt: new Date(),
    })

    setTransactions((state) => [response.data, ...state])
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        fetchTransactions,
        createTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  )
}
