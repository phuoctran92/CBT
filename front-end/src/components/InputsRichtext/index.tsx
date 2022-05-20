import { Typography } from '@material-ui/core';
import Editor from './Editor';
import useStyles from './styles';
interface InputsRichtextProps {
  title?: string,
  placeholder?: string,
  name: string,
  onChange: any,
  value: any,
  className: string
}

const InputsRichtext = (props: InputsRichtextProps) => {
  const classes = useStyles();
  const { title, value, onChange, placeholder, className } = props;

  return (
    <div className={classes.container}>
      <Typography className={classes.textTitle}>{title}</Typography>
      <Editor
        value={value}
        onChange={onChange}
        placeholder={placeholder || ""}
        className={className}
      />
    </div>
  );
};

export default InputsRichtext;



