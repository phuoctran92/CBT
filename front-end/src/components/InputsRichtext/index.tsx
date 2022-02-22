import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Typography } from '@material-ui/core';
import { memo, useState, useEffect } from 'react';
import useStyles from './styles';
import Images from 'config/images'
interface InputsRichtextProps {
  title?: string,
  placeholder?: string,
  name: string,
  onChange: any,
  value: any
}
const InputsRichtext = memo((props: InputsRichtextProps) => {
  const classes = useStyles();
  const { title, value, onChange, placeholder } = props;

  const PopAnswer = () => {
    <span id="create-blank">Create Blank <img src={Images.CBTicTag} alt="" /></span>
  }

  const modules = {
    toolbar: [
      [{ 'size': ['small', false, 'large', 'huge'] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'align': [] }],
      [{ 'indent': '-1' }, { 'indent': '+1' }],
      [{ 'color': [] }, { 'background': [] }],
      ['blockquote', 'code-block'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'script': 'sub' }, { 'script': 'super' }],
      ['image'],
      ['video'],
      ['clean'],
      ['create-blank']
    ]
  }

  return (
    <div className={classes.container}>
      <Typography className={classes.textTitle}>{title}</Typography>
      <ReactQuill
        theme="snow"
        value={value || ''}
        onChange={onChange}
        className={classes.quill}
        modules={modules}
        placeholder={placeholder}
      />
    </div>
  );
});
export default InputsRichtext;



