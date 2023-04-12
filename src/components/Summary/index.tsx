import { useContext } from 'react';
import { SummaryCard, SummaryContainer } from './styles';

import {
  ArrowCircleDown,
  ArrowCircleUp,
  CurrencyDollar,
} from 'phosphor-react';
import { TransactionContext } from '../../contexts/TransactionsContext';

export const Summary = () => {
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

  return (
    <SummaryContainer>
      {/* Entradas */}
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color='#00b37e' />
        </header>
        <strong>{summary.income}</strong>
      </SummaryCard>

      {/* Saídas */}
      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color='#f75a68' />
        </header>
        <strong>{summary.outcome}</strong>
      </SummaryCard>

      {/* Total */}
      <SummaryCard variant='green'>
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color='#fff' />
        </header>
        <strong>{summary.total}</strong>
      </SummaryCard>
    </SummaryContainer>
  );
};
