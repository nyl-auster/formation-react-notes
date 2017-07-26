import React from 'react'
import VoteCard from './VoteCard'
import Header from './Header'
import Section from './Section'
import characters from './characters'
import Row from './Row'

const App = () =>
  <div className="container">
    <Header>
      Winter is voting
    </Header>
    <Section>
      <Row>
        {characters.map(character =>
          <div key={character.id} className="col">
            <VoteCard id={character.id} title={character.name} text={character.description} picture={character.picture} />
          </div>
        )}
      </Row>
    </Section>
  </div>

export default App
