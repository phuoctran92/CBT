import { memo, useRef } from 'react';
import { Grid, Typography, Badge, Avatar, Box } from '@material-ui/core';
import Images from 'config/images';
import useStyles from './styles';
import clsx from 'clsx'
interface AvatarsProps {
  url?: string,
  showDelete?: boolean,
  errorMessage?: string,
  onClickDeleteImage?: () => void,
  onFileChange?: (file: File) => void,
  style?: any,
  propsIconUpload?: any,
  title: string,
  disabled?: boolean
}
const Avatars = memo((props: AvatarsProps) => {
  const inputFileRef = useRef(null)
  const { url, onClickDeleteImage, onFileChange, errorMessage, showDelete, title, propsIconUpload, disabled, ...rest } = props;
  const classes = useStyles();
  
  const handleClickUploadFile = () => {
    const _inputFileRef: any = inputFileRef;
    if(_inputFileRef.current) _inputFileRef.current.click()
  }

  const handleFileUploadChange = (input: any) => {
    const file = input?.target?.files[0];
    if(file){
      if(onFileChange) onFileChange(file)
    }
    const _inputFileRef: any = inputFileRef;
    _inputFileRef.current.value = null;
  }
  
  return (
    <Grid className={clsx(classes.containerAvatar, errorMessage ? 'isError': '')} {...rest}>
      <div className={classes.icAvatar}>
        <Typography>{ title }</Typography>
        <div>
          <Badge
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            onClick={onClickDeleteImage}
            badgeContent={<img style={{cursor: 'pointer', display: showDelete ? '': 'none'}} alt="" src={Images.icAvatarDelete} />}
          >
            <Avatar alt="" src={url} />
          </Badge>
        </div>
      </div>
      {
        !disabled && (
          <Box ml={3} mt={2} {...propsIconUpload} className={clsx(classes.icUpload, errorMessage ? 'isError': '')} onClick={ handleClickUploadFile }>
            <span>Upload Image</span>
            <input ref={inputFileRef} onChange={handleFileUploadChange} type="file" hidden accept="image/*" />
            { errorMessage && <Typography classes={{ root: classes.textError }}>{ errorMessage }</Typography>}
          </Box>
        )
      }
    </Grid>
  );
});
export default Avatars;



