import { createStyles, makeStyles, Typography } from '@material-ui/core';
import { ResponsiveBar } from '@nivo/bar';
import { selectMonthlyStatistics } from '@react-client/store/hydration/selectors';
import { getNow } from '@water-reminder/utils';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: '50vh'
    }
  })
);

const History = () => {
  const classes = useStyles(undefined);
  const statisticsData = useSelector(selectMonthlyStatistics);

  if (!statisticsData) {
    return null;
  }

  return (
    <>
      <Typography component='h1' variant='h5' align='center'>
        Your hydration history for {format(getNow(), 'MMMM')}
      </Typography>
      <div className={classes.root}>
        <ResponsiveBar
          data={statisticsData}
          keys={['amount']}
          theme={{
            axis: {
              domain: {
                line: {
                  stroke: 'rgba(0, 0, 0, 0.1)'
                }
              },
              ticks: {
                text: { fontFamily: 'Roboto', fontSize: 10 },
                line: { stroke: 'rgba(0, 0, 0, 0.1)' }
              }
            },
            grid: { line: { stroke: 'rgba(0, 0, 0, 0.1)' } }
          }}
          indexBy='date'
          colors={['#3f51b5']}
          margin={{ top: 15, right: 0, bottom: 50, left: 25 }}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: -60
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0
          }}
          labelSkipWidth={20}
          labelTextColor='rgba(255, 255, 255, 0.7)'
          animate={true}
          motionStiffness={90}
          motionDamping={15}
        />
      </div>
    </>
  );
};

export default History;
