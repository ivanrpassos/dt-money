import {
  createContext,
  ReactNode,
  useEffect,
  useState,
} from 'react';

export interface Transactions {
  id: number;
  tittle: string;
  description: string;
  type: 'income' | 'outcome';
  category: string;
  price: number;
  createdAt: string;
}

interface TransactionContextType {
  transactions: Transactions[];
  fetchTransactions: (query?: string) => Promise<void>;
}

interface TransactionContextProviders {
  children: ReactNode;
}

export const TransactionContext = createContext(
  {} as TransactionContextType,
);

export const TransactionsProvider = ({
  children,
}: TransactionContextProviders) => {
  const [transactions, setTransactions] = useState<
    Transactions[]
  >([]);

  async function fetchTransactions(query?: string) {
    const url = new URL(
      'http://localhost:3333/transactions',
    );

    if (query) {
      url.searchParams.append('q', query);
    }

    const res = await fetch(url);

    const data = await res.json();

    setTransactions(data);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionContext.Provider
      value={{ transactions, fetchTransactions }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
