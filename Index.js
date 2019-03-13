import React, { Component } from 'react';
import { Text,DeviceEventEmitter,BackHandler } from 'react-native';
import { Router, Scene, Stack} from 'react-native-router-flux';
import {Actions} from 'react-native-router-flux';
import Home from './Home';
import DashBoard from './DashBoard';
import Notification from './Notification';
import Settings  from'./Settings';
import Profile from'./Profile';
import Contact from'./Contact';
import About from'./About';
import AddBuilding from './AddBuilding';
import AddFlats from './AddFlats';
import AddTenant from './AddTenant';
import DisplayBuilding from './DisplayBuilding';
import DisplayFlats from './DisplayFlats';
import FlatDetails from './FlatDetails';
import DisplayTenant from './DisplayTenant';
import Payment1 from './Payment1';
import Payment2 from './Payment2';
import Payment3 from './Payment3';
import Payment4 from './Payment4';
import Routes from'../Routes';

export default class Index extends Component<{}> {

      constructor(props){
    super(props);
    this.state ={ isLoading: true, dataSource : [] }
  }

render () {

  // Simple component to render something in place of icon
const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
  );
}

  return (
    <Router hideNavBar={true}>
      {/* Tab Container */}
      <Scene key="root" hideNavBar={true}>
          <Scene key="tabbar" tabs={true} tabBarStyle={{ backgroundColor: '#FFFFFF' }}>
            {/* Tab and it's scenes */}
            <Scene icon={TabIcon} key="home" component={Home} title="Home"/>
            <Scene key="db" icon={TabIcon} component={DashBoard} title="Dash Board"/>
            <Scene key="no" icon={TabIcon} component={Notification} title="Notification"/>
            <Scene key="set" title="Settings" icon={TabIcon} component={Settings} title="Settings"/>
          </Scene>
          
          {/* Owner Pages */}
          <Scene key="index" component={Index} title="try"/>
          <Scene key="Profile" component={Profile} title="Profile" back={true} hideNavBar={false}/>
          <Scene key="Contact" component={Contact} title="Contact" back={true} hideNavBar={false}/>
          <Scene key="About" component={About} title="About" back={true} hideNavBar={false}/>
          <Scene key="AddBuilding" component={AddBuilding} title="Add Building" back={true} hideNavBar={false}/>
          <Scene key="AddFlats" component={AddFlats} title="Add Flats" back={true} hideNavBar={false}/>
          <Scene key="AddTenant" component={AddTenant} title="Add Tenant" back={true} hideNavBar={false}/>
          <Scene key="DisplayBuilding" component={DisplayBuilding} title="Display Building" back={true} hideNavBar={false}/>
          <Scene key="DisplayFlats" component={DisplayFlats} title="Display Flats" back={true} hideNavBar={false}/>
          <Scene key="FlatDetails" component={FlatDetails} title="FlatDetails" back={true} hideNavBar={false}/>
          <Scene key="DisplayTenant" component={DisplayTenant} title="Display Tenant" back={true} hideNavBar={false}/>
          <Scene key="pay1" component={Payment1} title="Payment" back={true} hideNavBar={false}/>
          <Scene key="pay2" component={Payment2} title="Payment"  back={true} hideNavBar={false}/>
          <Scene key="pay3" component={Payment3} title="Payment" back={true} hideNavBar={false}/>
          <Scene key="pay4" component={Payment4} title="Payment" back={true} hideNavBar={false}/>
          <Scene key="Routes" component={Routes} title="Routes"/>
        </Scene>
    </Router>


  );
}
}
