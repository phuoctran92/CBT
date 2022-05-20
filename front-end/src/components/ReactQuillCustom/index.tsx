import { memo } from "react";
import useStyles from "./styles";

interface ReactQuillCustomProps {
  defaultValue?: any,
  onChange?: any,
}

const ReactQuillCustom = memo((props: ReactQuillCustomProps) => {

  const { onChange, defaultValue } = props;

  const classes = useStyles();


  return (
    <>
    </>
  );
});
export default ReactQuillCustom;
