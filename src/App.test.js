

import {render} from '@testing-library/react'
import '@testing-library/jest-dom'
import SearchBar from './components/SearchBar'

test('renders a message', () => {
  const {asFragment, getByTestId} = render(<SearchBar/>)
  expect(getByTestId('search-field')).toBeInTheDocument()
 
})