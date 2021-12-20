import React, { memo, useEffect, useState } from 'react';
import useStyles, { customSelectStyle } from './styles';
import { Grid, Typography } from '@material-ui/core'
import Select, { components, DropdownIndicatorProps, GroupBase, MultiValueRemoveProps } from 'react-select'
import Images from 'config/images'
import { useFormContext } from 'react-hook-form'
interface CategoriesSelectProps {
  name: string,
  label: string,
  options: { value: any, label: string }[],
  placeholder: string,
  onChange?: any,
}

const DropdownIndicator = (props: DropdownIndicatorProps<{ value: any; label: string; }, true, GroupBase<{ value: any; label: string; }>>) => {
  return (
    <components.DropdownIndicator {...props}>
      <img src={Images.icSearch} alt="" />
    </components.DropdownIndicator>
  );
};

const MultiValueRemove = (props: MultiValueRemoveProps<{ value: any; label: string; }, true, GroupBase<{ value: any; label: string; }>>) => {
  return (
    <components.MultiValueRemove {...props}>
      <img src={Images.icX} alt="" />
    </components.MultiValueRemove>
  );
};

const CategoriesSelect = memo(React.forwardRef((props: CategoriesSelectProps, ref) => {
  const { label, options, name, placeholder, } = props
  const classes = useStyles();
  const { setValue, watch, register, formState: { errors } } = useFormContext()
  const [selectedOption, setSelectedOption] = useState<{ value: any; label: string; }[]>([])

  const values = watch(name) as string[];

  useEffect(() => {
    register(name, { required: "Categories is required" });
  }, [register, name, errors]);

  useEffect(() => {
    if (values) {
      let newSelectedOption: { value: any; label: string; }[] = []
      newSelectedOption = values.map(value => (options[options.findIndex(e => e.value === value)]))
      setSelectedOption(newSelectedOption);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options]);

  const handleChangeOption = (e) => {
    let options = e.map(option => option.value)
    setValue(name, options)
    setSelectedOption(e)
  }

  return (
    <Grid item md={6}>
      <Typography className={classes.label}>{label}</Typography>
      <Select
        components={{ DropdownIndicator, MultiValueRemove }}
        placeholder={placeholder}
        styles={customSelectStyle}
        isMulti
        isClearable={false}
        isSearchable
        name={name}
        options={options}
        onChange={handleChangeOption}
        value={selectedOption}
      />
      {errors[name]?.message && <Typography classes={{ root: classes.textError }}>{errors[name]?.message}</Typography>}
    </Grid>
  );
}));
export default CategoriesSelect;



