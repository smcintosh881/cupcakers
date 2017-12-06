import React, { Component, PropTypes } from 'react'
import { Segment, Header, Grid, Icon } from 'semantic-ui-react'

export default class AboutCard extends Component {

  render() {
    return (
      <Grid style={{paddingTop: '100px'}}>
      
        <Grid.Row>
          <Grid.Column width={4} />
          <Header color='teal' as='h1' style={{fontFamily: 'Strait'}}>
            <Icon name='marker' color='teal'/>Locations
          </Header>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={2} />
          <Grid.Column width={6}>
            <Segment textAlign='center'>
              <Header as='h2' content='Oswego @ 172 west 1st street' style={{'marginTop': '10px', fontFamily: 'Strait'}} color='teal' />
              <p>
                Nestled near the harbor in this beautiful Port City you will find our original location where the CupCake dream began!
                This quant little location offers a full array of cupcakes and baked goods.  Also offering iced and hot coffee drinks 
                as well assorted bottled drinks.  This full service location has a few tables for a cozy little date for 2-4 people yet 
                packs a ton of punch offering our complete menu of baked good as well as wedding, large event and wholesale services.  
                Our Oswego location provides an incredible amount of talent in our staff to fill all of your deliciously creative needs!
                Bakery Manager - Stephanie Armour-Dobrowolski
              </p>
            </Segment>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
        <Grid.Column width={2} />
        <Grid.Column width={6}>
          <Segment textAlign='center'>
            <Header as='h2' content='Liverpool @ 500 old liverpool road' style={{'marginTop': '10px', fontFamily: 'Strait'}} color='teal' />
            <p>
              Our Liverpool Location is ready to serve!  
              Offering our Full bakery menu along with an extensive menu of coffee and tea drinks, fresh squeezed lemonade and more!  
              Our Barista's are sure to make the latte or cappuccino of your dreams. Free WIFI is readily available, 
              please ask an associate for the sign on information.  Cake, Wedding, large event and wholesale consultations are available 
              on-site.  Incredibly talented staff members are on hand to make your ideas a reality! Small banquet and catering services are available onsite on Sundays 
              for meetings, showers, parties, etc. Please call 315-264-9842, ext 3 for more information!
              Bakery Managers and Owners - Chris and Amy Sutter 
            </p>
          </Segment>
        </Grid.Column>
        </Grid.Row>

      </Grid> 
    )
  }

}
