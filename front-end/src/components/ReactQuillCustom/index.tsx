import React, { memo } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import useStyles from "./styles";

interface ReactQuillCustomProps {
  defaultValue?: any,
  onChange?: any,
}

const ReactQuillCustom = memo((props: ReactQuillCustomProps) => {

  const { onChange, defaultValue } = props;

  const classes = useStyles();

  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline'],
      ['clean'],
      ['image'],
    ],
  }

  return (
    <>
      <ReactQuill
        theme="snow"
        value={defaultValue}
        onChange={onChange}
        className={classes.quill}
        modules={modules}

      />
    </>
  );
});
export default ReactQuillCustom;
