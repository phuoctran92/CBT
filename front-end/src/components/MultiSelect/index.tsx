import { debounce, Grid } from '@material-ui/core';
import images from 'config/images';
import { memo, useState } from 'react';
import useStyles from './styles';

interface multiSelectProps {
  options: string[],

}

const OptionSel = (props) => {

  const { name, onClick, onRemove, ...rest } = props;

  const handleClick = () => {
    onClick ? onClick(name) : console.log('');
  }

  const handleRemove = () => {
    onRemove ? onRemove(name) : console.log('');
  }

  const classes = useStyles();
  return (
    <Grid
      {...rest}
      item
      className={classes.option}
      onClick={handleClick}
    >
      <img onClick={handleRemove} alt="icon" src={images.icRemove} />
      <p>{name}</p>
    </Grid>
  )
}

const MultiSelect = memo((props: multiSelectProps) => {
  const { options } = props;

  const classes = useStyles();

  const [selected, setSelected] = useState(['']);
  const [unSelected, setUnSelected] = useState(options);
  const [filter, setFilter] = useState(options);

  const timeOut = debounce((value: any) => {
    if (value === '') {
      setFilter(unSelected)
    }
    else {
      var fil = unSelected.filter(val => { return !!val.toLowerCase().match(value.toLowerCase()) })
      setFilter(fil)
    }
  }, 750)

  const handleSearch = (e) => {
    timeOut(e)
  }

  const handleAddOption = (e: string) => {
    var fil = unSelected.filter(val => { return val !== e })
    setUnSelected(fil)
    setFilter(fil)

    var data = [...selected, e];
    setSelected(data);
  }

  const handleRemoveOption = (e: string) => {
    var fil = selected.filter(val => { return val !== e })
    setSelected(fil)

    var data = [...unSelected, e];
    setUnSelected(data);
    setFilter(data)
  }

  return (
    <>
      <div className={classes.customSelect}>
        <div>
          <div><img alt="icon" src={images.icSearch} /></div>
        </div>
        <input
          type="text"
          className={classes.input}
          placeholder="Quiz/ Survey/ Deal"
          onChange={(e) => handleSearch(e.target.value)}
        />
        <div className={classes.divive}></div>
        <Grid container>
          {selected.slice(1).map(val => (
            <OptionSel
              key={val}
              name={val}
              onRemove={handleRemoveOption}
            />
          ))}
        </Grid>

      </div>
      <Grid spacing={2} container className={classes.optionList}>
        {filter.map(val => (
          <OptionSel
            key={val}
            name={val}
            onClick={handleAddOption}
          />
        ))}
      </Grid>
    </>
  );
});
export default MultiSelect;



