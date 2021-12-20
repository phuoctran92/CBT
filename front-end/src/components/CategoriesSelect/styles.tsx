import { createStyles, makeStyles } from '@material-ui/core/styles';

export default makeStyles(() =>
  createStyles({
    label: {
      fontSize: 14,
      fontWeight: 500,
      color: '#304D95',
      letterSpacing: 1,
      marginBottom: 12
    },
    textError: {
      color: 'red',
      fontSize: 14,
      padding: '5px 0px',
      whiteSpace: 'initial'
    },
  }),
);

export const customSelectStyle = {
  menuList: (provided, state) => ({
    ...provided,
    padding: 0,
    color: '#333333',
    fontSize: 14,
    fontWeight: 500,
    letterSpacing: 1
  }),
  placeholder: (provided, state) => ({
    ...provided,
    color: '#BDBDBD',
    fontSize: 14,
    letterSpacing: 1,
  }),
  control: (provided, state) => ({
    ...provided,
    borderRadius: 25,
    minHeight: 44
  }),
  multiValue: (provided, state) => ({
    ...provided,
    borderRadius: 5,
    height: 23,
    background: '#304D95',
  }),
  multiValueLabel: (provided, state) => ({
    ...provided,
    color: '#FFFFFF',
    fontSize: 14,
    letterSpacing: 1,
    paddingLeft: 10
  }),
  multiValueRemove: (provided, state) => ({
    ...provided,
    color: '#FFFFFF',
    paddingRight: 10,
    '&:hover': {
      background: '#304D95',
      borderRadius: 5
    }
  }),
  indicatorSeparator: () => ({}),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    paddingRight: 16
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    paddingLeft: 16
  }),
  input: (provided, state) => ({
    ...provided,
    color: '#333333',
    fontSize: 14,
    letterSpacing: 1,
    fontWeight: 500
  }),
}
