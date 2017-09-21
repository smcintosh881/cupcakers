import React from 'react'
import { Image, Header, Icon, Grid } from 'semantic-ui-react'

import './LandingPage.css'

const Landing = () => (
  <div id='landing' >
    <Image src='landing.jpg' fluid disabled/>
    <Grid className='landingPageName'>
    	<Grid.Column width={1}/>
    	<Grid.Row centered>
    		<Header className='extraLargeFont' color='violet'>
      			SHANNON MCINTOSH
    		</Header>
    	</Grid.Row>
    	<Grid.Row centered>
    		<Icon id='downIconHover' disabled size='massive' name='angle down' color='violet' onClick={() => document.getElementById('ABOUT').scrollIntoView()}/>
    	</Grid.Row>
    </Grid>
  </div>
)

export default Landing