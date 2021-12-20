import { debounce, FormControl, Grid, Typography } from '@material-ui/core';
import images from 'config/images';
import { memo, useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import useStyles from './styles';

interface multiSelect2Props {
  title?: string,
  options: {
    value: string,
    label: string,
  }[],

}

const MultiSelect2 = memo((props: multiSelect2Props) => {
  const { title, options } = props;

  const classes = useStyles();

  const animatedComponents = makeAnimated();

  const [filter, setFilter] = useState(options);

  const timeOut = debounce((value: any) => {

  }, 750)

  return (
    <FormControl classes={{ root: classes.container }}>
      {title && <Typography className={classes.textTitle} classes={{ root: classes.textTitle }}>{title}</Typography>}
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti
        options={options}
      />
    </FormControl>

  );
});
export default MultiSelect2;



