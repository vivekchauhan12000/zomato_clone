import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function DetailTabs(props) {
  return (
    <div>
      <Tabs>
    <TabList>
      <Tab>Overview</Tab>
      <Tab>Contact</Tab>
    </TabList>
 
    <TabPanel>
      <h4>{props.name}</h4>
      <h4>{props.des}</h4>
      <h4>{props.food}</h4>
    </TabPanel>
    <TabPanel>
      <h2>contact details</h2>
      <h4>{props.location}</h4>
      <h4>{props.phone}</h4>
    </TabPanel>
  </Tabs>
    </div>
  )
}

export default DetailTabs
