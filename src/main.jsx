import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { ContainerProvider } from '@jishida/react-awilix';
import { createContainer, asValue } from 'awilix';

const container = createContainer();
container.register({ name: asValue('Jay') })

ReactDOM.render(
  <React.StrictMode>
    <ContainerProvider container={container}>
      <App />
    </ContainerProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
