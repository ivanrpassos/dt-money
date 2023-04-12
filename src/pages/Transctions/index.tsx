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
import {
  dateFormatter,
  priceFormatter,
} from '../../utils/formatter';

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
            {transactions.map(
              (transaction: TransactionProps) => {
                return (
                  <tr key={transaction.id}>
                    <td width='50%'>
                      {transaction.tittle}
                    </td>
                    <td>
                      <PriceHighlight
                        variant={transaction.type}
                      >
                        {transaction.type === 'outcome' &&
                          '- '}
                        {priceFormatter.format(
                          transaction.price,
                        )}
                      </PriceHighlight>
                    </td>
                    <td>{transaction.category}</td>
                    <td>
                      {dateFormatter.format(
                        new Date(transaction.createdAt),
                      )}
                    </td>
                  </tr>
                );
              },
            )}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
};
