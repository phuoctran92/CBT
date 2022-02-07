import { Grid, FormControlLabel, Checkbox } from '@material-ui/core';
import Buttons from 'components/Buttons';
import ButtonsOutline from 'components/ButtonsOutline';
import { memo, useState } from 'react';
import useStyles from './styles';
import Images from 'config/images';
import SelectContentPopup from '../SelectContentPopup';

interface PageProps {
  pageNumber: number
}

const Page = memo((props: PageProps) => {
  const { pageNumber } = props
  const classes = useStyles();
  const [shuffle, setShuffle] = useState(false)
  const [open, setOpen] = useState(false)

  const handleChangeShuffle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShuffle(event.target.checked)
  }
  return (
    <Grid container className={classes.container}>
      <p className={classes.title}>{`Page ${pageNumber}`}</p>
      <FormControlLabel
        control={<Checkbox
          color='primary'
          checked={shuffle}
          onChange={handleChangeShuffle}
          name="shuffle" />}
        label="Shuffle Question"
      />
      <Grid item md={12}>

      </Grid>
      <Grid item container justify="flex-end" md={12} >
        <ButtonsOutline
          children='Add New'
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

export default Page
