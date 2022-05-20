import useStyles from "./styles";

interface ReactQuillCustomProps {
  defaultValue?: any,
  onChange?: any,
}

const ReactQuillCustom = (props: ReactQuillCustomProps) => {

  const { onChange, defaultValue } = props;

  const classes = useStyles();


  return (
    <>
    </>
  );
};
export default ReactQuillCustom;
