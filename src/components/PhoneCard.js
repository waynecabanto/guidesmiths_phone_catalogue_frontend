import React from 'react'
import { makeStyles
} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';

import {useDispatch} from 'react-redux';
import {selectPhone, phoneClicked} from '../redux/actions/getPhonesActions';
import {CardMedia} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex'
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto'
    },
    cover: {
      width: 100,
      height: 200
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
  }));
  
function PhoneCard(props) {

    const classes = useStyles();
    //const theme = useTheme();   
    const dispatch = useDispatch();

    return (
        <Card className={classes.root} variant="outlined">
          <div className={classes.details}>
            <CardHeader 
            title={props.phone.name} 
            subheader={props.phone.manufacturer}
            />
            <CardContent className={classes.content}>
                <Typography variant="body2" component="p">
                    {'Color: '}
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  {props.phone.color}
                </Typography>
                <Typography variant="body2" component="p">
                    {'Price: '}
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  {'€ ' + props.phone.price}
                </Typography>
                <Typography variant="body2" component="p">
                    {'Screen: '}
                  &nbsp;
                  {props.phone.screen}
                </Typography>
            </CardContent>
            <div className={classes.controls}>
            <Button variant="contained" color="primary" onClick={() => {
                    dispatch(selectPhone(props.phone));
                    dispatch(phoneClicked(1));
                }}>MORE DETAILS</Button>
            </div>
          </div>
          <CardMedia
            className={classes.cover}
            image={"https://github.com/guidesmiths/interview-code-challenges/blob/master/react/phone-catalogue/images/"+props.phone.imageFileName+"?raw=true"}
            title={props.phone.name}
          />
        </Card>
      );
}

export default PhoneCard;
