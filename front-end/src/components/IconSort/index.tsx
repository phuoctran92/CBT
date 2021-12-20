import { memo } from 'react';
import useStyles from './styles';
import clsx from 'clsx';
import { Button } from '@material-ui/core';

interface IconSortProps {
  typeSort?: '' | 'az' | 'za',
  onClick?: () => void
}

const IconSort = memo((props: IconSortProps) => {
  const classes = useStyles();
  const { typeSort, ...rest } = props;
  
  const icon = (typeSort ?? '') !== '' ? (typeSort === 'az' ? classes.sortAZ : classes.sortZA ) : '';
  return (
    <Button className={clsx(classes.btnDefault, icon)} {...rest}></Button>
  );
});
export default IconSort;



