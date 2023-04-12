import { useContext } from 'react';
import { TransactionContext } from '../contexts/TransactionsContext';

export const useSummary = () => {
  const { transactions } = useContext(TransactionContext);

  const summary = transactions.reduce(
    (
      // Acumulador
      acc,
      transaction,
    ) => {
      if (transaction.type === 'income') {
        acc.income += transaction.price;
        acc.total += transaction.price;
      } else {
        acc.outcome += transaction.price;
        acc.total -= transaction.price;
      }

      return acc;
    },
    // Formatando o retorno
    {
      income: 0,
      outcome: 0,
      total: 0,
    },
  );

  return summary;
};
