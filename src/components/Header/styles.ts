import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme['gray-900']};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.section`
  margin: 0 auto;
  padding: 0 1.5rem;
  width: 100%;
  max-width: 1120px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NewTransactionButton = styled.button`
  padding: 0 1.25rem;
  height: 50px;
  background-color: ${(props) => props.theme['green-500']};

  color: ${(props) => props.theme.white};
  font-weight: 700;
  border: 0;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme['green-700']};
    transition: background-color 0.2s;
  }
`
