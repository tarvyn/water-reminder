import { Container, createStyles, Fab, makeStyles, Paper, Theme, Typography } from '@material-ui/core';
import { Add, Delete, LocalDrink } from '@material-ui/icons';
import { RootState } from '@react-client/store/reducer';
import { hydrationActions } from '@react-client/store/hydration/actions';
import { DoseVolume } from '@water-reminder/api-interfaces';
import { format } from 'date-fns';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dose: {
      margin: theme.spacing(1),
      padding: theme.spacing(2),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    caption: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    fab: {
      position: 'fixed',
      bottom: theme.spacing(4),
      right: theme.spacing(4),
      backgroundColor: theme.palette.secondary.main
    },
  }),
);

const Doses = () => {
  const classes = useStyles(undefined);
  const dispatch = useDispatch();
  const doses = useSelector((state: RootState) => state.hydration.doses);
  const loggedIn = useSelector((state: RootState) => state.auth.loggedIn);
  const createDose = () => dispatch(hydrationActions.createDose({
    time: new Date(),
    volume: DoseVolume.cup
  }));
  const deleteDose = (id: string) => dispatch(hydrationActions.deleteDose(id));

  useEffect(
    () => {
      dispatch(hydrationActions.getDoses());
    },
    []
  );

  return <Container component='main' maxWidth='xs'>
    <div>
      {(doses || []).map(dose =>
        <Paper key={dose._id} className={classes.dose}>
          <Typography component='span' variant='subtitle2'>
            {format(new Date(dose.time), 'yyyy.MM.dd (HH:mm)')}
          </Typography>
          <div className={classes.caption}>
            <LocalDrink />
            <Typography component='span' variant='subtitle2'>
              {`${dose.volume}ml`}
            </Typography>
          </div>
          <Delete onClick={() => deleteDose(dose._id)}/>
        </Paper>)}
    </div>
    {loggedIn &&
    <Fab onClick={createDose} className={classes.fab} color='secondary'>
      <Add />
    </Fab>}
  </Container>;
};

export default Doses;
