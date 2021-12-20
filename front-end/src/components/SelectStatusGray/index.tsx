import { memo, forwardRef, useState, useEffect } from 'react';
import {
  FormControl,
  MenuItem,
  Accordion, AccordionSummary, AccordionDetails
} from '@material-ui/core';
import Images from 'config/images';
import useStyles from './styles';

interface InputSelectProps {
  defaultValue?: string,
  options: any,
  onChange?: any,
  readonly?: boolean,
}

const SelectStatusGray = memo(forwardRef((props: InputSelectProps, ref) => { //React.forwardRef((props: InputsProps, ref)
  const { options, defaultValue, readonly, onChange } = props;
  const classes = useStyles();
  const [expanded, setExpanded] = useState<string | false>(false);
  const [selectedOption, setSelectedOption] = useState(defaultValue ? defaultValue : options?.[0])

  const ExpandIcon = (props) => {
    return (
      <img src={Images.icArrowDown} alt="drop-down" {...props} />
    )
  };

  const handleClick = (event) => {
    setSelectedOption(event.target.textContent)
    setExpanded(false)
  }

  const handleChange =
    (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  useEffect(() => {
    onChange && onChange(selectedOption === 'All Activities' ? '' : selectedOption)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedOption])

  return (
    <FormControl classes={{ root: classes.container }}>
      <Accordion
        className={classes.root}
        expanded={expanded === 'panel1'}
        onChange={readonly ? undefined : handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandIcon />}
        >
          <MenuItem className={classes.selected} value={selectedOption}>{selectedOption}</MenuItem>
        </AccordionSummary>
        <AccordionDetails className={classes.borderTop}>
          {options && options.filter((option) => option !== selectedOption)
            .map((option, index) =>
              <MenuItem
                key={index}
                onClick={handleClick}
                className={classes.option}
                value={option}
              >
                {option}
              </MenuItem>)}
        </AccordionDetails>
      </Accordion>
    </FormControl>
  );
}));
export default SelectStatusGray;



