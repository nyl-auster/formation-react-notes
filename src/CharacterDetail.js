import React from 'react'
import characters from './characters'

class CharacterDetail extends React.Component {

  constructor({ match }) {
    super()
    this.character = characters.find(character => character.id == match.params.id)
  }

  render () {
    return <div> 
      <h1> {this.character.name} </h1>
      <div>{this.character.description}</div>
     </div>
  }

}

export default CharacterDetail