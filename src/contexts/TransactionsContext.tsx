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
}

interface TransactionContextProps {
  children: ReactNode;
}

export const TransactionContext = createContext(
  {} as TransactionContextType,
);

export const TransactionsProvider = ({
  children,
}: TransactionContextProps) => {
  const [transactions, setTransactions] = useState<
    Transactions[]
  >([]);

  async function loadTransactions() {
    const res = await fetch(
      'http://localhost:3333/transactions',
    );

    const data = await res.json();

    setTransactions(data);
  }

  useEffect(() => {
    loadTransactions();
  }, []);

  return (
    <TransactionContext.Provider value={{ transactions }}>
      {children}
    </TransactionContext.Provider>
  );
};
