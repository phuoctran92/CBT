import { Button } from '@material-ui/core';
import clsx from 'clsx';
import useStyles from './styles';

interface IconSortProps {
  typeSort?: '' | 'az' | 'za',
  onClick?: () => void
}

const IconSort = (props: IconSortProps) => {
  const classes = useStyles();
  const { typeSort, ...rest } = props;
  
  const icon = (typeSort ?? '') !== '' ? (typeSort === 'az' ? classes.sortAZ : classes.sortZA ) : '';
  return (
    <Button className={clsx(classes.btnDefault, icon)} {...rest}></Button>
  );
};
export default IconSort;



