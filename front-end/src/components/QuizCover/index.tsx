import React, { memo } from 'react';
import { IconButton } from '@material-ui/core';
import useStyles from './styles';
import Images from "config/images";
import Buttons from "components/Buttons";
interface QuizCoverProps {
  name: string,
  url?: string,
  onFileChange?: any,
  onClickDeleteImage?: any
}

const QuizCover = memo((props: QuizCoverProps) => {
  const classes = useStyles();

  const { name, onFileChange, url, onClickDeleteImage } = props;

  const hiddenFileInput = React.useRef<HTMLInputElement>(null);
  const handleClick = event => {
    if (url) return;
    if (hiddenFileInput !== null && hiddenFileInput.current !== null) {
      hiddenFileInput.current.click()
    }
  };


  const handleFileUploadChange = (input: any) => {
    const file = input?.target?.files[0];
    if (file) {
      if (onFileChange) onFileChange(file)
    }
    const _inputFileRef: any = hiddenFileInput;
    _inputFileRef.current.value = null;
  }

  return (
    <div className={classes.container} onClick={handleClick}>
      {!url && <p>{name}</p>}
      <div style={{ position: 'relative' }} className={url ? 'hasImage' : ''}>
        {
          !url && <IconButton className={classes.iconButton} />
        }
        {
          !!url && <Buttons
            children="Remove"
            btnType="icon"
            icon={Images.icXCircleBlue}
            onClick={onClickDeleteImage}
          />
        }
        {
          url && <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="banner img" src={url} />
        }

      </div>
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleFileUploadChange}
        accept="image/*"
        style={{ display: 'none' }}
      />
    </div>
  )
});
export default QuizCover;

