import { Header } from '../../components/Header';
import { Summary } from '../../components/Summary';
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles';

export const Transactions = () => {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width='50%'>Desenvolvimento de Site</td>
              <td>
                <PriceHighlight variant='income'>
                  R$ 12.000,00
                </PriceHighlight>
              </td>
              <td>Venda</td>
              <td>15/05/2023</td>
            </tr>
            <tr>
              <td width='50%'>Licença de Software</td>
              <td>
                <PriceHighlight variant='outcome'>
                  - R$ 500,00
                </PriceHighlight>
              </td>
              <td>Compra</td>
              <td>15/05/2023</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
};
