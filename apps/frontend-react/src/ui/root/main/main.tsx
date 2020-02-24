import { Toolbar } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import { Phone, History as HistoryIcon } from '@material-ui/icons';
import Doses from '@react-client/ui/hydration/doses/doses';
import History from '@react-client/ui/hydration/history/history';
import React from 'react';

interface TabPanelProps {
  readonly children?: React.ReactNode;
  readonly index: number;
  readonly value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component='div'
      role='tabpanel'
      hidden={value !== index}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexFlow: 'column nowrap',
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.paper
  },
  tab: {
    width: '100%'
  },
  tabContent: {
    flexGrow: 1
  }
}));

const Main = () => {
  const classes = useStyles(undefined);
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position='sticky'>
        <Toolbar>
          <Tabs
            value={value}
            classes={{ root: classes.tab }}
            onChange={handleChange}
            variant='fullWidth'
            indicatorColor='secondary'
            textColor='inherit'
            centered
          >
            <Tab label='Drink' icon={<Phone />} />
            <Tab label='History' icon={<HistoryIcon />} />
          </Tabs>
        </Toolbar>
      </AppBar>
      <TabPanel value={value} index={0} >
        <Doses />
      </TabPanel>
      <TabPanel value={value} index={1} >
        <History />
      </TabPanel>
    </div>
  );
};

export default Main;
