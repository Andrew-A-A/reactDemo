import React, { useState } from 'react';
import {
  ShellBar,
  SideNavigation,
  SideNavigationItem,
  Card,
  CardHeader,
  Text,
  Title,
  FlexBox,
  FlexBoxDirection,
  FlexBoxAlignItems,
  FlexBoxJustifyContent,
  Icon,
  Avatar,
  List,
  ListItemCustom,
  ObjectStatus,
  Button,
  Badge,
  Input,
  ListItemStandard,
  MultiComboBox
} from '@ui5/webcomponents-react';
import { BarChart } from '@ui5/webcomponents-react-charts';
import '@ui5/webcomponents-icons/dist/menu2.js';
import '@ui5/webcomponents-icons/dist/home.js';
import '@ui5/webcomponents-icons/dist/action-settings.js';
import '@ui5/webcomponents-icons/dist/employee.js';
import '@ui5/webcomponents-icons/dist/manager.js';
import '@ui5/webcomponents-icons/dist/task.js';
import '@ui5/webcomponents-icons/dist/bell.js';
import '@ui5/webcomponents-icons/dist/log.js';
import '@ui5/webcomponents-icons/dist/navigation-right-arrow.js';

import { userData, kpiData, chartData, activities, departments } from './data';
import SegmentedProgressBar from './SegmentedProgressBar.jsx';
const Homepage = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handleNavToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: '#f5f7fa' }}>
      {/* Top Header */}
      <ShellBar
        primaryTitle="Clearance System"
        logo={<img src="logo.png" alt="Logo" style={{height: 24, borderRadius: 12}} />} 
        showCoPilot={true}
        onLogoClick={() => {}}
        startButton={
           <Button icon="menu2" design="Transparent" onClick={handleNavToggle} />
        }
        profile={
            <Avatar initials="AS" />
        }
      >
      </ShellBar>

      <div style={{ display: 'flex', flexGrow: 1, overflow: 'hidden' }}>
        {/* Side Navigation */}
        <SideNavigation collapsed={collapsed} onSelectionChange={() => {}}>
          <SideNavigationItem text="Home" icon="home" selected />
          <SideNavigationItem text="Requests Management" icon="task" />
          <SideNavigationItem text="Workflow Configurations" icon="action-settings" />
          <SideNavigationItem text="Settings" icon="action-settings" />
        </SideNavigation>

        {/* Main Content */}
        <div style={{ flexGrow: 1, padding: '2rem', overflow: 'auto' }}>
          
          {/* Welcome Section */}
          <FlexBox direction={FlexBoxDirection.Column} style={{ marginBottom: '2rem' }}>
            <Title level="H2">Hello {userData.firstName},</Title>
            <Text style={{ color: '#666' }}>Welcome to the clearance system</Text>
          </FlexBox>

          {/* KPI Cards Grid */}
          <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
              gap: '1.5rem', 
              marginBottom: '2rem' 
          }}>
            {kpiData.map((kpi, index) => (
              <Card key={index} style={{ borderRadius: '0.75rem', boxShadow: '0 0.125rem 0.25rem rgba(0,0,0,0.075)' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '1.25rem' }}>
                      <FlexBox alignItems={FlexBoxAlignItems.Center} justifyContent={FlexBoxJustifyContent.SpaceBetween} style={{marginBottom: '1rem'}}>
                         <FlexBox alignItems={FlexBoxAlignItems.Center}>
                             <Icon name={kpi.icon || "log"} style={{marginRight: '0.5rem', opacity: 0.7}} />
                             <Title level="H6">{kpi.title}</Title>
                         </FlexBox>
                         <Icon name="navigation-right-arrow" style={{ opacity: 0.5 }} />
                      </FlexBox>
                      
                      <div style={{ 
                          border: '1px solid #e5e5e5', 
                          borderRadius: '0.5rem', 
                          padding: '1.25rem', 
                          flexGrow: 1, 
                          display: 'flex', 
                          alignItems: 'center'
                      }}>
                          <Title level="H2" style={{marginRight: '0.75rem'}}>{kpi.count}</Title>
                          <ObjectStatus state={kpi.statusState} inverted>{kpi.status}</ObjectStatus>
                      </div>
                  </div>
              </Card>
            ))}
          </div>

          {/* Analytics & Activity Section */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
            <SegmentedProgressBar totalSegments={200} completedPercentage={10} />
            {/* Chart Card */}
            <Card style={{ flex: '1 1 500px', minWidth: '400px' }}>
                <CardHeader titleText="Average Days to Respond">
                    <MultiComboBox placeholder="Departments" style={{width: '200px'}}>
                        {departments.map(dept => <ListItemStandard key={dept.name}>{dept.name}</ListItemStandard>)}
                    </MultiComboBox>
                </CardHeader>
                <div style={{ padding: '1rem', height: '300px' }}>
                    <BarChart
                        dimensions={[{ accessor: 'label' }]}
                        measures={[{ accessor: 'value', label: 'Days' }]}
                        dataset={chartData}
                    />
                </div>
            </Card>

            {/* Activity Updates Card */}
            <Card style={{ flex: '1 1 500px', minWidth: '400px' }}>
                <CardHeader titleText="Activity Updates" subtitleText="Recent changes and actions" avatar={<Icon name="task" />} />
                <List>
                    {activities.map(activity => (
                        <ListItemCustom key={activity.id} type="Active">
                            <FlexBox alignItems={FlexBoxAlignItems.Center} style={{ width: '100%', padding: '0.5rem 0' }}>
                                <Avatar icon={activity.icon} size="XS" style={{ marginRight: '0.75rem' }} />
                                <FlexBox direction={FlexBoxDirection.Column} style={{ flexGrow: 1 }}>
                                    <FlexBox alignItems={FlexBoxAlignItems.Center}>
                                        <Text style={{ fontWeight: 'bold', marginRight: '0.25rem' }}>{activity.title}</Text>
                                        <Text>{activity.subtitle}</Text>
                                    </FlexBox>
                                    <Text style={{ fontSize: '0.75rem', color: '#666' }}>{activity.time}</Text>
                                </FlexBox>
                                <ObjectStatus state={activity.statusState} inverted>{activity.status}</ObjectStatus>
                                {activity.action && (
                                    <Button design="Transparent" style={{ marginLeft: '0.5rem' }}>
                                        {activity.action}
                                    </Button>
                                )}
                            </FlexBox>
                        </ListItemCustom>
                    ))}
                </List>
            </Card>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
