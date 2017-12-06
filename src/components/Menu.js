import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import './LandingPage.css'

export default class NavBar extends Component {
  state = {activeItem: 'Cupcakers Bakery'}

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    document.getElementById(name).scrollIntoView() 
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu pointing secondary fixed='top' color='teal' style={{background: 'white'}}>
        <Menu.Menu position='left'> 
          <Menu.Item className='sacramento largeFont' name='About' active={activeItem === 'About'} onClick={this.handleItemClick} />
          <Menu.Item className='sacramento largeFont' name='Menu' active={activeItem === 'Menu'} onClick={this.handleItemClick} />
        </Menu.Menu>
        <Menu.Menu>
          <Menu.Item className='sacramento extraLargeFont' name='Cupcakers Bakery' active={activeItem === 'Cupcakers Bakery'} onClick={this.handleItemClick} />
        </Menu.Menu> 
        <Menu.Menu position='right'>
          <Menu.Item className='sacramento largeFont' name='Order' active={activeItem === 'Order'} onClick={this.handleItemClick} />
          <Menu.Item className='sacramento largeFont' name='Contact' active={activeItem === 'Contact'} onClick={this.handleItemClick} />
        </Menu.Menu>
      </Menu>
    )
  }
}