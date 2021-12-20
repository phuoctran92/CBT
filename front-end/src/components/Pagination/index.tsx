import { memo } from 'react';
import useStyles from './styles'
import { IconButton, MenuItem, Select } from '@material-ui/core';
import Images from 'config/images';
import { usePagination } from '@material-ui/lab';
import clsx from 'clsx';
interface PaginationProps {
  total: number,
  size: number,
  currentPage: number,
  onChange?: (props) => void; 
  oneChangePageSize?: (size: number) => void; 
}


const Paginations = memo( (props: PaginationProps) => {
  const { total, currentPage, size } = props;
  
  const classes = useStyles();

  const handleOnClick = (e: any, page: number) => {
    typeof props.onChange === 'function' && props.onChange(page);
  }
  const handleChangePageSize = (event) => {
    const s = parseInt(event.target.value, 10)
    !!s && typeof props.oneChangePageSize === 'function' && props.oneChangePageSize(s);
  };

  const { items } = usePagination({  count: Math.ceil(total/size), page: currentPage, onChange: handleOnClick });

  if(items.length <= 2) return null;
  const iconComponent = (props) => {
    return (
        <img src={Images.icArrowDropdown} alt="drop-down" {...props}/>
    )};
  return (
    <nav className={classes.root}>
        <Select 
          disableUnderline
          MenuProps={{anchorOrigin: {
            vertical: "top",
            horizontal: "right"
          },
          transformOrigin: {
            vertical: "bottom",
            horizontal: "right"
          },
          getContentAnchorEl: null,
          MenuListProps: {
            style: {
              paddingTop: 0,
              paddingBottom: 0,
            }}}}
          IconComponent={iconComponent}
          defaultValue={5}
          value={size}
          className={classes.select}
          onChange={handleChangePageSize}
        >
          <MenuItem dense value={5}>Show: 5</MenuItem>
          <MenuItem dense value={10}>Show: 10</MenuItem>
          <MenuItem dense value={15}>Show: 15</MenuItem>
          <MenuItem dense value={20}>Show: 20</MenuItem>
        </Select>
      <ul className={classes.ul}>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children;

          if (type === "start-ellipsis" || type === "end-ellipsis") {
            children = "...";
          } else if (type === "page") {
            children = (
              <IconButton
                className={clsx(classes.arialFont, {[classes.selectedIcon]: selected})}
                {...item}
              >
                {page}
              </IconButton>
            );
          } else {
            children = (
              <IconButton {...item} className={classes.icon}>
                {type === "previous" ? <img src={Images.icPrevious} alt="" /> : <img src={Images.icNext} alt="" />}
              </IconButton>
            );
          }
          return (
            <li key={index} style={{ margin: "auto 0" }}>
              {children}
            </li>
          );
        })}
      </ul>
    </nav>
  );
});
export default Paginations;



