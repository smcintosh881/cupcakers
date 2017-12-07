import React, { Component, PropTypes } from 'react'
import { Segment, Header, Grid, Icon, Image, Card } from 'semantic-ui-react'
import strings from '../strings.json';
import Map from './Map'
export default class AboutCard extends Component {

  render() {
    return (
      <Grid style={{paddingTop: '50px'}}>
        <Grid.Row centered={true}>
          <Header className='largestFont' color='teal' as='h1' textAlign='center' style={{fontFamily: 'Sacramento'}}>
            Locations
          </Header>
        </Grid.Row>

        <Grid.Column width={2}/>
        <Grid.Column width={6}>
          <Map/>
        </Grid.Column>
      </Grid> 
    )
  }
}
