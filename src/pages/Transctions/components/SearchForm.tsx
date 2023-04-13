import { useForm } from 'react-hook-form'
import { SearchFormContainer } from './styles'
import { memo } from 'react'

import { MagnifyingGlass } from 'phosphor-react'

import * as zod from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'
import { TransactionContext } from '../../../contexts/TransactionsContext'
import { useContextSelector } from 'use-context-selector'

/**
 * Por que um componente renderiza?
 */

const searchFormSchema = zod.object({
  query: zod.string(),
})

type SearchFormInputs = zod.infer<typeof searchFormSchema>

const SearcFormComponent = () => {
  const fetchTransactions = useContextSelector(
    TransactionContext,
    (context) => {
      return context.fetchTransactions
    },
  )

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransactions(data: SearchFormInputs) {
    await fetchTransactions(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Buscar transações"
        {...register('query')}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} /> Buscar
      </button>
    </SearchFormContainer>
  )
}

export const SearchForm = memo(SearcFormComponent)
