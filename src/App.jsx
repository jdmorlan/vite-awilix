import React from 'react'
import { useCradle } from '@jishida/react-awilix';

const App = () => {
  const { name } = useCradle();
  return <div>Hello, { name}</div>
}

export default App
