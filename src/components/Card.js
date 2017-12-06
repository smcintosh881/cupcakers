import React, { Component, PropTypes } from 'react'
import { Segment, Header } from 'semantic-ui-react'

export default class AboutCard extends Component {
  
  render() {
    return (
      <Segment textAlign='center'>
        <Header as='h2' content={this.props.title} style={{'marginTop': '10px', fontFamily: 'Strait'}} color='teal' />
        <p>{this.props.body}</p>
      </Segment>
    )
  }

}
