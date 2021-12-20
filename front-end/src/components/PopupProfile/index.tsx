import { Card, CardContent, Typography, Avatar, Box, Divider } from '@material-ui/core';
import { memo } from 'react';
import useStyles from './styles';

interface ProfileProps {
  userPhoto?: string,
  id?: string,
  userName?: string,
  firstName?: string,
  lastName?: string,
  email?: string,
  phoneNumber?: number | string,
  status?: string,
  referralCode?: string,
  birthDay?: string,
  creationTime?: string,
  numberOfCustomer?: number,
}

const PopupProfile = memo((props: ProfileProps) => {
  const { numberOfCustomer, userPhoto, id, userName, firstName, lastName, email, phoneNumber, status, referralCode, birthDay, creationTime } = props;
  const classes = useStyles();

  return (
    <Card className={classes.container}>
      <CardContent className={classes.content}>
        <Typography>
          ID #{id}
        </Typography>
        <div className={classes.topContent}>
          <Avatar
            alt={userName}
            src={userPhoto || ''}
          />
          <div>
            <p>{`${firstName} ${lastName}`}</p>
            <p>{email}</p>
            <p>{phoneNumber || "No have yet"}</p>
          </div>
        </div>


        <div className={classes.nearTopContent}>
          <Typography> Status </Typography>
          <Typography> {status} </Typography>
        </div>
        <div className={classes.middleContent}>
          <Typography> No. of Customer </Typography>
          <Typography> {numberOfCustomer} </Typography>
        </div>
        <div className={classes.middleContent}>
          <Typography> Referral Code </Typography>
          <Typography> {referralCode} </Typography>
        </div>
        <Box mt="15px" mb="30px">
          <Divider />
        </Box>
        <div className={classes.middleContent}>
          <Typography> Date of Birth </Typography>
          <Typography> {birthDay || "No have yet"} </Typography>
        </div>
        <div className={classes.middleContent}>
          <Typography> Member Since </Typography>
          <Typography> {creationTime} </Typography>
        </div>
      </CardContent>
    </Card>
  )
});

export default PopupProfile;