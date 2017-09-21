import React from 'react'
import AboutCard from './AboutCard'
import { Grid, Header, Image, Icon } from 'semantic-ui-react'
import './LandingPage.css'

//TODO: simplify this by maping each object
const About = () => (
	<div id='ABOUT'>
  		<Grid columns='equal'>
  			<Grid.Row style={{'marginTop': '40px'}}/>
  			<Grid.Row>
    			<Grid.Column width={1}/>
    			<Grid.Column >
      			<Image src={require('../../public/one.jpg')} size='medium' shape='circular' />
    			</Grid.Column>
    			<Grid.Column >
      			<Image src={require('../../public/two.jpg')} size='medium' shape='circular' />
    			</Grid.Column>
          <Grid.Column >
            <Image src={require('../../public/three.jpg')} size='medium' shape='circular' />
          </Grid.Column>
    		</Grid.Row>
        <Grid.Row centered>
          <Header as='h1' color='violet'>ABOUT ME</Header>
        </Grid.Row>
        <Grid.Row centered style={{'paddingTop': '0px'}}>
          <Grid.Column textAlign='center' width={12}>
           I like maple syrup
           </Grid.Column>
        </Grid.Row>
    		<Grid.Row centered>
            <Icon disabled id='downIconHover' size='massive' name='angle down' color='violet' />
    		</Grid.Row>
    	</Grid>
    </div>
)

export default About