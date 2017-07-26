import React from 'react'
import Card from './Card'

class VoteCard extends React.Component {

  state = { votes: 0 }
  keyById = {
    1: 49,
    2: 50,
    3: 51
  }

  incrementVotes () {
    this.setState({ votes: this.state.votes + 1 })
  }

  componentDidMount () {
    window.addEventListener('keyup', this.vote)
  }

  componentWillUnmount () {

  }

  handleClick = () => {
    this.incrementVotes()
  }

  vote = (event) => {
    const characterId = this.props.id
    if (event.keyCode === this.keyById[characterId]) {
      this.incrementVotes()
    }
  }

  render () {
    const text =
      <div className="text-center">
        <h5> {this.props.text} </h5>
        <button className="btn btn-primary" onClick={this.handleClick}>👍 vote</button>
      </div>
    return <Card {...this.props} text={text} footer={this.state.votes} />
  }

}

export default VoteCard
