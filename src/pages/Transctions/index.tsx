import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { Summary } from '../../components/Summary';
import { SearchForm } from './components/SearchForm';
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles';

interface Transactions {
  id: number;
  tittle: string;
  description: string;
  type: 'income' | 'outcome';
  category: string;
  price: number;
  createdAt: string;
}

export const Transactions = () => {
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
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            {transactions.map((res: Transactions) => {
              return (
                <tr key={res.id}>
                  <td width='50%'>{res.tittle}</td>
                  <td>
                    <PriceHighlight variant={res.type}>
                      {res.price}
                    </PriceHighlight>
                  </td>
                  <td>{res.category}</td>
                  <td>{res.createdAt}</td>
                </tr>
              );
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
};
