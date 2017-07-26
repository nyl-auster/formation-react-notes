import React from 'react'
import Home from './Home'
import CharacterDetail from './CharacterDetail'
import Header from './Header'
import Section from './Section'
import { Route, BrowserRouter } from 'react-router-dom'
import Menu from './Menu'

const App = () =>
  <div className="container">
    <Header>
      Winter is voting
    </Header>
    <BrowserRouter>
      <div>
        <Menu />
        <Section>
          <Route exact path="/" component={Home} />
          <Route path="/character/:id" component={CharacterDetail} />
        </Section>
      </div>
    </BrowserRouter>
  </div>

export default App
