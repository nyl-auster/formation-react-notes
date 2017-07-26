import React from 'react'
import Row from './Row'
import VoteCard from './VoteCard'
import characters from './characters'

const Home = () => 
  <Row>
    {characters.map(character =>
      <div key={character.id} className="col">
        <VoteCard id={character.id} title={character.name} text={character.description} picture={character.picture} />
      </div>
    )}
  </Row>


export default Home