import {
  FormControlLabel, Checkbox,
  Accordion, AccordionDetails, AccordionSummary, IconButton, Typography
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InputsRichtext from 'components/InputsRichtext';
import images from 'config/images';
import { memo, useState } from 'react';
import useStyles from './styles';


const ANewQuestion = memo(() => {
  const classes = useStyles();
  const [isSingle, setIsSignle] = useState(false)
  const [shuffleAnswer, setShuffleAnswer] = useState(false)

  const handleDelete = (e) => {
    e.stopPropagation()
    console.log('Delete ANewQuestion');
  }
  const handleChangeIsSingle = () => {
    setIsSignle(!isSingle);
  };
  const handleChangeShuffleAnswer = () => {
    setShuffleAnswer(!shuffleAnswer);
  };

  return (
    <div className={classes.container}>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <p className={classes.questionNum}>1</p>
          <Typography className={classes.heading}>Question</Typography>
          <FormControlLabel
            onClick={e => e.stopPropagation()}
            control={<Checkbox
              color='primary'
              checked={isSingle}
              onChange={handleChangeIsSingle}
              name="isSingle" />}
            label="Is Single Question"
          />
          <FormControlLabel
            onClick={e => e.stopPropagation()}
            control={<Checkbox
              color='primary'
              checked={shuffleAnswer}
              onChange={handleChangeShuffleAnswer}
              name="shuffle" />}
            label="Shuffle Answer"
          />
          <IconButton
            onClick={handleDelete}
            size="small"
            children={<img src={images.CBTicTrashRed} alt="" />}
          />
        </AccordionSummary>
        <AccordionDetails className={classes.generalContent}>
          <InputsRichtext
            name='ANewQuestion'
          />
        </AccordionDetails>
      </Accordion>
    </div>
  );
})

export default ANewQuestion
