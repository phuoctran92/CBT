import { Card, CardContent, CardActions, CardMedia, IconButton, Typography, Chip } from '@material-ui/core';
import React, { memo } from "react";
import Images from 'config/images';
import useStyles from './styles';
import clsx from "clsx";
import { formatDate } from 'helpers';

interface ChipProps {
  chipType?: string;
  type?: any;
  id?: number;
  bannerId?: string;
  title?: string;
  displayOrder?: number;
  description?: string;
  bannerPhoto?: string;
  creationTime?: string;
  onClick?: any;
}

const CardBanner = memo((props: ChipProps) => {
  const classes = useStyles();
  const { chipType, bannerId, title, description, bannerPhoto, creationTime, displayOrder, onClick } = props;
  return (
    <Card className={classes.container} onClick={onClick}>
      <div
        className={clsx(
          chipType === "quiz" ? classes.chipQuiz : "",
          chipType === "survey" ? classes.chipSurvey : "",
          chipType === "deal" ? classes.chipDeal : "",
        )}>
        <CardMedia
          className={classes.photo}
          component="img"
          height="140"
          image={bannerPhoto}
        />
        {chipType ? <Chip label={
          chipType === "quiz" ? "Quiz" :
            chipType === "survey" ? "Survey" :
              chipType === "deal" ? "Deal" : ""
        } /> : <></>}

      </div>
      <CardActions className={classes.button}>
        <div className="eye">
          <CardMedia
            component="img"
            image={Images.icEyeOpen}
          />
          <Typography>{displayOrder}</Typography>
        </div>
        <div className="filter">
          <IconButton />
          <IconButton />
        </div>
      </CardActions>
      <CardContent className={classes.containerContent}>
        <Typography gutterBottom variant="h5" component="div" className="title">
          {title}
        </Typography>
        <div className="description">
          {description}
        </div>
        <div>
          <p>
            {formatDate(creationTime)}
          </p>
          <p>
            {bannerId?.split("-")[0]}
          </p>
        </div>
      </CardContent>
    </Card>
  )
});

export default CardBanner;

