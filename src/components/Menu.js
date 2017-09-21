import React, { Component } from 'react'
import { Menu, Image, Button } from 'semantic-ui-react'
import './LandingPage.css'

export default class NavBar extends Component {
  state = {}

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    document.getElementById(name).scrollIntoView() 
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu fixed='top'>
        <Menu.Item name='landing' onClick={this.handleItemClick}> 
          <Image src='logo.png' verticalAlign='middle' />
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item className='greenMenuText' name='ABOUT' active={activeItem === 'ABOUT'} onClick={this.handleItemClick} />
          <Menu.Item className='greenMenuText' name='PROJECTS' active={activeItem === 'PROJECTS'} onClick={this.handleItemClick} />
          <Menu.Item className='greenMenuText' name='PHOTOGRAPHY' active={activeItem === 'PHOTOGRAPHY'} onClick={this.handleItemClick} />
          <Menu.Item className='greenMenuText' name='RESUME' active={activeItem === 'RESUME'} onClick={this.handleItemClick} />
        </Menu.Menu>
      </Menu>
    )
  }
}