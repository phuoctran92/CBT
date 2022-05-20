import { Dialog, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import JsxParser from 'react-jsx-parser';
import { MatchingQuestion } from '../models';
import DraggableElement from './DraggableElement';
import useStyles from "./styles";

interface MatchingPreviewProps {
  open: boolean,
  question: MatchingQuestion,
  onClose: Function
}

const removeFromList = (list, index) => {
  const result = Array.from(list);
  const [removed] = result.splice(index, 1);
  return [removed, result];
};

const addToList = (list, index, element) => {
  const result = Array.from(list);
  result.splice(index, 0, element);
  return result;
};

const MatchingPreview = (props: MatchingPreviewProps) => {
  const { open, question, onClose } = props
  const classes = useStyles()
  const [showFeedback, setShowFeedback] = useState(false)
  const [questionContent, setQuestionContent] = useState("")

  const [elements, setElements] = useState({});

  useEffect(() => {
    const lists = question.answers.map(e => `pos_${e.displayOrder.toString()}`)
    lists.push("answers")
    const newElement = lists.reduce(
      (acc, listKey) => ({
        ...acc, [listKey]: listKey === "answers" ? question.answers.map((e, index) => ({
          id: `item_${index}`,
          content: `${e.answerContent}`
        })) : []
      }),
      {}
    )

    setElements(newElement)
    let n = 0
    const newContent = question.questionContent.replaceAll(/<ans>(.*?)<\/ans>/g, v => {
      n++
      return `<DraggableElement
        elements={elements["pos_${n - 1}"]}
        prefix={"pos_${n - 1}"}
      />`
    })
    setQuestionContent(newContent)

  }, [question]);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    console.log(result.destination);

    const listCopy = { ...elements };

    const sourceList = listCopy[result.source.droppableId];
    const [removedElement, newSourceList] = removeFromList(
      sourceList,
      result.source.index
    );

    listCopy[result.source.droppableId] = newSourceList;
    const destinationList = listCopy[result.destination.droppableId];
    listCopy[result.destination.droppableId] = addToList(
      destinationList,
      result.destination.index,
      removedElement
    );
    setElements(listCopy);
  };

  return (
    <Dialog
      open={open}
      onClose={() => onClose()}
      maxWidth="md"
      className={classes.dialog}
    >
      <div className={classes.container}>
        <p className={classes.title}>{`Title : ${question.questionTitle || "-"} `}</p>
        <p
          className={classes.feedbackBtn}
          onClick={() => setShowFeedback(!showFeedback)}
        >Show Feedback</p>
        <p className={classes.questionNum}>Question 1</p>
        <DragDropContext onDragEnd={onDragEnd}>
          <Grid container className={classes.answers}>
            <Grid item sm={9}>
              <JsxParser
                bindings={{
                  elements: elements,
                }}
                components={{ DraggableElement }}
                jsx={questionContent}
              />
            </Grid>
            <Grid item sm={3}>
              <DraggableElement
                elements={elements["answers"]}
                prefix={"answers"}
              />
            </Grid>
          </Grid>
        </DragDropContext>
        {
          showFeedback && question.answers.map(answer => (
            <div className={classes.feedback}>
              <span>{answer.answerContent}</span><div dangerouslySetInnerHTML={{ __html: answer.feedback }}></div>
            </div>
          ))
        }
      </div>
    </Dialog >
  )
};

export default MatchingPreview