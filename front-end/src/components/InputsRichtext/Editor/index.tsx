import { memo } from 'react';
import ReactQuill from 'react-quill';
import EditorToolbar, { redoChange, undoChange, formats } from './EditorToolbar';
import 'react-quill/dist/quill.snow.css';
import './styles.css';

interface EditorProps {
  placeholder?: string;
  onChange: any;
  value: any;
  className: string
}

export const Editor = memo((props: EditorProps) => {
  const { onChange, value, placeholder, className } = props

  const handleChange = (value) => {
    onChange(value);
  };
  const modules = {
    toolbar: {
      container: `.${className}`,
      handlers: {
        undo: undoChange,
        redo: redoChange,
      },
    },
  };
  return (
    <div className='text-editor'>
      <EditorToolbar className={className} />
      <ReactQuill
        theme='snow'
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        modules={modules}
        formats={formats}
      />
    </div>
  );
});

export default Editor;
