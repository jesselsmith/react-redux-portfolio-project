import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postEncounter, patchEncounter } from '../actions/fetchActions'


class EncounterForm extends Component {
  state = {
    title: ''
  }

  handleOnChange = e => {
    this.setState({
      title: e.target.value
    })
  }

  handleOnSubmit = e => {
    e.preventDefault()
    if(this.props.method === 'POST'){
      this.props.postEncounter({
        encounter: this.state
      })
    }else{
      this.props.patchEncounter({
        encounter: this.state
      })
    }
    
    this.setState({
      title: ''
    })
  }

  render() {
    return (
      <form name='encounterForm' onSubmit={this.handleOnSubmit}>
        <label>Title: </label>
        <input type='text' value={this.state.title} onChange={this.handleOnChange} />
        <input type='submit' value='Add Encounter' />
      </form>
    )
  }
}

export default connect(null, { postEncounter, patchEncounter })(EncounterForm)