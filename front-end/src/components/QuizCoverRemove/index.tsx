import Buttons from 'components/Buttons';
import Images from 'config/images';
import useStyles from './styles';

const RemoveQuizCover = () => {
  const classes = useStyles();


  return (
    <div className={classes.container}>
      <div >
        <Buttons
          children='Remove'
          btnType='icon'
          icon={Images.icXcircle}
        />
      </div>
    </div>
  )
};
export default RemoveQuizCover;

