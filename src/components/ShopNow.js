import React, { Component, PropTypes } from 'react'
import { Segment, Header, Grid, Icon, Image, Card } from 'semantic-ui-react'

const src = '/public/side.jpg';

export default class ShopNow extends Component {
  state = {hover: false}

  handleMouseOver = (e) => {
    this.setState({ hover: true })
  }

  handleMouseLeave = (e) => {
    this.setState({ hover: false })
  }
  render() {
    const { hover } = this.state;
    return (
      <Grid columns='equal' style={{paddingTop: '100px'}}>
          <Grid.Column width={1} />
            <Grid.Column>
              <Card color='teal'>
                <Image rounded size='medium' src='1.jpg' disabled={hover} onMouseLeave={this.handleMouseLeave} onMouseOver={this.handleMouseOver}/>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card color='teal'>
                <Image rounded size='medium' src='1.jpg' disabled={hover} onMouseOver={this.handleMouseOver}/>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card color='teal'>
                <Image rounded size='medium' src='1.jpg' disabled={hover} onMouseOver={this.handleMouseOver}/>
              </Card>
            </Grid.Column>
            
      </Grid> 
    )
  }
}