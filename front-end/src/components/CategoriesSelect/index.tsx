import { Grid, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import Select from 'react-select';
import useStyles, { customSelectStyle } from './styles';
interface CategoriesSelectProps {
  name: string,
  label?: string,
  options: { value: any, label: string }[],
  placeholder: string,
  onChange: Function,
}

const CategoriesSelect = React.forwardRef((props: CategoriesSelectProps, ref) => {
  const { options, name, placeholder, onChange } = props
  const classes = useStyles();
  const [selectedOption, setSelectedOption] = useState<{ value: any; label: string; }[]>([])

  // const DropdownIndicator = (props: DropdownIndicatorProps<{ value: any; label: string; }, true, GroupBase<{ value: any; label: string; }>>) => {
  //   return (
  //     <components.DropdownIndicator {...props}>
  //       <img src={Images.icCa} alt="" />
  //     </components.DropdownIndicator>
  //   );
  // };

  // const MultiValueRemove = (props: MultiValueRemoveProps<{ value: any; label: string; }, true, GroupBase<{ value: any; label: string; }>>) => {
  //   return (
  //     <components.MultiValueRemove {...props}>
  //       <img src={Images.icX} alt="" />
  //     </components.MultiValueRemove>
  //   );
  // };

  const handleChangeOption = (e) => {
    setSelectedOption(e)
    onChange(e.value)
  }

  return (
    <Grid container className={classes.container}>
      <Typography className={classes.label}>Category</Typography>
      <Select
        //components={{ DropdownIndicator, MultiValueRemove }}
        placeholder={placeholder}
        styles={customSelectStyle}
        isSearchable
        //isMulti
        isClearable={false}
        name={name}
        options={options}
        onChange={handleChangeOption}
        value={selectedOption}
      />
    </Grid>
  );
});
export default CategoriesSelect;



