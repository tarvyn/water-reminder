import {
  createStyles,
  IconButton,
  ListSubheader,
  Theme
} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import { NightsStay, WbSunny } from '@material-ui/icons';
import { TimePicker } from '@material-ui/pickers';
import { settingsActions } from '@react-client/store/settings/actions';
import {
  selectTimeSettings,
  timeToNumber
} from '@react-client/store/settings/selectors';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      width: 300,
    }
  })
);

const SideBar = ({ children, className }) => {
  const classes = useStyles(undefined);
  const dispatch = useDispatch();
  const { awakeTime, sleepTime } = useSelector(selectTimeSettings);
  const [state, setState] = React.useState({ opened: false });

  const toggleDrawer = (opened: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, opened });
  };

  const sideList = () => (
    <div className={classes.list} role='presentation'>
      <ListSubheader>Timings settings</ListSubheader>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <WbSunny />
          </ListItemIcon>
          <ListItemText
            primary={
              <>
                <span>Awake Time</span>
                <TimePicker
                  value={awakeTime}
                  onChange={time =>
                    dispatch(settingsActions.setAwakeTime(timeToNumber(time)))
                  }
                />
              </>
            }
          />
        </ListItem>
      </List>
      <List>
        <ListItem button>
          <ListItemIcon>
            <NightsStay />
          </ListItemIcon>
          <ListItemText
            primary={
              <>
                <span>Sleep Time</span>
                <TimePicker
                  value={sleepTime}
                  onChange={time =>
                    dispatch(settingsActions.setSleepTime(timeToNumber(time)))
                  }
                />
              </>
            }
          />
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  return (
    <>
      <IconButton className={className} onClick={toggleDrawer(true)}>
        {children}
      </IconButton>

      <Drawer anchor='right' open={state.opened} onClose={toggleDrawer(false)}>
        {sideList()}
      </Drawer>
    </>
  );
};

export default SideBar;
