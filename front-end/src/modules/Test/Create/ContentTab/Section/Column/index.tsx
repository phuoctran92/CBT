import { Grid } from '@material-ui/core';
import ButtonsOutline from 'components/ButtonsOutline';
import Images from 'config/images';
import { memo, useState } from 'react';
import ANewQuestion from '../../ANewQuestion';
import Description from '../../Description';
import SelectContentPopup from '../../SelectContentPopup';
import useStyles from './styles';

const Column = memo(() => {

  const classes = useStyles();
  const [open, setOpen] = useState(false)

  return (
    <Grid container className={classes.container}>
      <Grid item md={12}>
        {/* <Description />
        <ANewQuestion /> */}
      </Grid>
      <Grid item container justify="flex-end" md={12} >
        <ButtonsOutline
          children='Add Content'
          className={classes.addNewBtn}
          icon={Images.CBTicPluscircleBlue}
          onClick={() => setOpen(!open)}
        />
        <SelectContentPopup
          open={open}
          onClose={() => setOpen(false)}
        />
      </Grid>
    </Grid>
  );
})

export default Column
