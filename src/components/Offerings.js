import React, { Component } from 'react'
import { Grid, Header, Menu, Segment, Icon } from 'semantic-ui-react'
import './LandingPage.css'

export default class Offerings extends Component {
  state = {activeItem: 'Cake'}

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    document.getElementById(name).scrollIntoView() 
  }

  render() {
    const { activeItem } = this.state
    return (
      <div id='ABOUT'>
      <Grid columns='equal' style={{paddingTop: '100px'}}>
        <Grid.Row centered={true}>
          <Header className='largestFont' color='teal' as='h1' textAlign='center' style={{fontFamily: 'Sacramento'}}>
            Menu
          </Header>
        </Grid.Row>
        <Grid.Column width={2}/>
        <Grid.Column width={12}>
            <Segment fluid>
                <Menu pointing secondary vertical color='teal'>
                  <Menu.Item name='Cake' active={activeItem === 'Cake'} onClick={this.handleItemClick}/>
                  <Menu.Item name='Cookies' active={activeItem === 'Cookies'} onClick={this.handleItemClick}/>
                  <Menu.Item name='Cupcakes' active={activeItem === 'Cupcakes'} onClick={this.handleItemClick}/>
                </Menu>
                <Segment color='teal' size='small'>
                  This is a thing
                </Segment>
            </Segment>
        </Grid.Column>
      </Grid>
    </div>
    )
  }
}