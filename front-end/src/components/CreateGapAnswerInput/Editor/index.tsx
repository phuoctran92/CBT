import { memo, useEffect, useMemo, useState } from 'react';
import ReactQuill from 'react-quill';
import EditorToolbar, { redoChange, undoChange, createAnswer, formats, removeAnswer } from './EditorToolbar';
import 'react-quill/dist/quill.snow.css';
import './styles.css';
import { MatchingAnswer } from "modules/Question/Create/components/Matching/models"
interface EditorProps {
  placeholder?: string;
  onChangeQuestion: any;
  question: any;
  className: string,
  onChangeAnswer: Function,
  answer: MatchingAnswer[]
}

export const Editor = memo((props: EditorProps) => {
  const { onChangeQuestion, question, placeholder, className, answer, onChangeAnswer } = props

  const handleChange = (value) => {
    onChangeQuestion(value);
    const ans = [...value.matchAll('<ans>(.*?)</ans>')].map(e => e[1]) as string[];
    const newAnswer = ans.map((e, index) => {
      if (answer[index]) return { ...answer[index], answerContent: e, isCorrect: true }
      else return {
        displayOrder: index,
        answerContent: e,
        score: "0",
        penaltyScore: "0",
        isCorrect: true,
        feedback: ""
      }
    })
    onChangeAnswer(newAnswer)
  };

  const modules = {
    toolbar: {
      container: `.${className}`,
      handlers: {
        undo: undoChange,
        redo: redoChange,
        createAnswer: createAnswer,
        removeAnswer: removeAnswer
      },
    },
  };
  return (
    <div className='text-editor'>
      <EditorToolbar className={className} />
      <ReactQuill
        theme='snow'
        value={question}
        onChange={handleChange}
        placeholder={placeholder}
        modules={modules}
        formats={formats}
      />
    </div>
  );
});

export default Editor;
