import React, { Component, PropTypes } from 'react'
import { Segment, Header, Grid, Icon, Image, Card } from 'semantic-ui-react'
import strings from "../strings.json";
export default class About extends Component {

  render() {
    return (
      <Grid style={{paddingTop: '100px'}}>
        <Grid.Row centered={true}>
          <Header className='largestFont' color='teal' as='h1' textAlign='center' style={{fontFamily: 'Sacramento'}}>
            About Us
          </Header>
        </Grid.Row>

        <Grid.Column width={2}/>
        <Grid.Column width={6}>
          <Grid.Row>
            <Grid.Column>
              <Segment textAlign='center'>
                <Header as='h2' content={strings.location_title_oswego} style={{'marginTop': '10px', fontFamily: 'Strait'}} color='teal' />
                <p>{strings.location_body_oswego}</p>
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className='paddingGrid'/>
          <Grid.Row>
            <Grid.Column >
              <Segment textAlign='center'>
                <Header as='h2' content={strings.location_title_liverpool} style={{'marginTop': '10px', fontFamily: 'Strait'}} color='teal' />
                <p>{strings.location_body_liverpool}</p>
              </Segment>
            </Grid.Column>
          </Grid.Row>

        </Grid.Column>
        <Grid.Column width={6}>
          <Card fluid>
            <Image src='location.jpg' />
          </Card>
        </Grid.Column>
      </Grid> 
    )
  }
}