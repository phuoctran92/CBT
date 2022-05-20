import { Quill } from 'react-quill';
import images from 'config/images';
// Custom Undo button icon component for Quill editor. You can import it directly
// from 'quill/assets/icons/undo.svg' but I found that a number of loaders do not
// handle them correctly
const CustomUndo = () => (
  <svg viewBox='0 0 18 18'>
    <polygon className='ql-fill ql-stroke' points='6 10 4 12 2 10 6 10' />
    <path
      className='ql-stroke'
      d='M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9'
    />
  </svg>
);

const CreateAnswer = () => (
  <span className='createAnswer'>
    Create Answer
    <img src={images.CBTicTag} alt='' />
  </span>
);
const RemoveAnswer = () => (
  <span className='removeAnswer'>
    Remove Answer
    <img src={images.CBTicTrashRed} alt='' />
  </span>
);

let Inline = Quill.import('blots/inline');
class AnswerBlot extends Inline {}
AnswerBlot.blotName = 'answer';
AnswerBlot.tagName = 'ans';
Quill.register(AnswerBlot);

// Redo button icon component for Quill editor
const CustomRedo = () => (
  <svg viewBox='0 0 18 18'>
    <polygon className='ql-fill ql-stroke' points='12 10 14 12 16 10 12 10' />
    <path
      className='ql-stroke'
      d='M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5'
    />
  </svg>
);
export function createAnswer() {
  const index = this.quill.getSelection().index;
  const length = this.quill.getSelection().length;
  //console.log(this.quill);
  this.quill.removeFormat(index, length);
  this.quill.formatText(index, length, 'answer', true);
  this.quill.setSelection(0);
}

export function removeAnswer() {
  const index = this.quill.getSelection().index;
  let [leaf, offset] = this.quill.getLeaf(index);

  if (leaf.parent.constructor.name === 'AnswerBlot') {
    const startIndex = leaf.offset(this.quill.scroll);
    this.quill.removeFormat(startIndex, leaf.domNode.length);
  }
}
// Undo and redo functions for Custom Toolbar
export function undoChange() {
  this.quill.history.undo();
}
export function redoChange() {
  this.quill.history.redo();
}
// Add sizes to whitelist and register them
const Size = Quill.import('formats/size');
Size.whitelist = ['extra-small', 'small', 'medium', 'large'];
Quill.register(Size, true);

// Modules object for setting up the Quill editor

// Formats objects for setting up the Quill editor
export const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'align',
  'strike',
  'script',
  'blockquote',
  'background',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'color',
  'code-block',
  'answer',
];

// Quill Toolbar component
export const QuillToolbar = ({ className }) => (
  <div className={`toolbar ${className}`}>
    <span className='ql-formats'>
      <select className='ql-size' defaultValue='medium'>
        <option value='extra-small'>Extra Small</option>
        <option value='small'>Small</option>
        <option value='medium'>Medium</option>
        <option value='large'>Large</option>
      </select>
    </span>
    <span className='ql-formats'>
      <button className='ql-bold' />
      <button className='ql-italic' />
      <button className='ql-underline' />
      <button className='ql-strike' />
    </span>
    <span className='ql-formats'>
      <button className='ql-list' value='ordered' />
      <button className='ql-list' value='bullet' />
      <button className='ql-indent' value='-1' />
      <button className='ql-indent' value='+1' />
    </span>
    <span className='ql-formats'>
      <button className='ql-script' value='super' />
      <button className='ql-script' value='sub' />
      <button className='ql-blockquote' />
    </span>
    <span className='ql-formats'>
      <select className='ql-align' />
      <select className='ql-color' />
      <select className='ql-background' />
    </span>
    <span className='ql-formats'>
      <button className='ql-link' />
      <button className='ql-image' />
      <button className='ql-video' />
    </span>
    <span className='ql-formats'>
      <button className='ql-undo'>
        <CustomUndo />
      </button>
      <button className='ql-redo'>
        <CustomRedo />
      </button>
      <button className='ql-createAnswer'>
        <CreateAnswer />
      </button>
      <button className='ql-removeAnswer'>
        <RemoveAnswer />
      </button>
    </span>
  </div>
);

export default QuillToolbar;
