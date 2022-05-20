import {
  Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControlLabel, IconButton, Typography
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import QuestionSelectForm from 'components/QuestionSelectForm';
import images from 'config/images';
import { memo, useState } from 'react';
import useStyles from './styles';

interface ANewQuestionProps {
  page: number,
  index: number
}

const ANewQuestion = memo((props: ANewQuestionProps) => {
  const { page, index } = props
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
          <FormControlLabel
            labelPlacement='start'
            onClick={e => e.stopPropagation()}
            control={<input
              className={classes.scoreInput}
            />}
            label="Score"
          />
          <IconButton
            onClick={handleDelete}
            size="small"
            children={<img src={images.CBTicTrashRed} alt="" />}
          />
        </AccordionSummary>
        <AccordionDetails className={classes.generalContent}>
          <QuestionSelectForm />
        </AccordionDetails>
      </Accordion>
    </div>
  );
})

export default ANewQuestion
