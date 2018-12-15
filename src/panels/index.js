import React  from 'react';
import { Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import LeftPanel from './leftPanel';
import RightPanel from './rightPanel'


export default () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', overflow: 'hidden', height: 'calc(100vh -60px)' }}>
    <Grid container>
        <Grid item sm={3}>
        <Paper style={{ overflow: 'hidden', overflowY: 'scroll', height: 'calc(100vh - 65px)' }}>
          <LeftPanel />
        </Paper>
        </Grid>
      <Grid item sm={9}>
        <RightPanel />
      </Grid>
    </Grid>
  </div>
);
