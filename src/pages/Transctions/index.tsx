import { useContext, useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { Summary } from '../../components/Summary';
import { SearchForm } from './components/SearchForm';
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles';
import {
  TransactionContext,
  Transactions as TransactionProps,
} from '../../contexts/TransactionsContext';

export const Transactions = () => {
  const { transactions } = useContext(TransactionContext);

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            {transactions.map((res: TransactionProps) => {
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
