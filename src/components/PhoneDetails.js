import React from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router';
import { Grid, Card, CardMedia, Typography, CardContent } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

//redux
import {phoneClicked} from '../redux/actions/getPhonesActions';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
  },
  media: {
    height: 'auto',
    paddingTop: '100%', // 16:9
  },
  button: {
    marginBottom: 10,
    marginTop: 10
  },
  giveMarginTop: {
    marginTop: 30,
  },
  putMarginRight: {
    marginRight: 30,
    display: 'flex'
  },
  away:{
    marginTop: 50
  }
}));


function PhoneDetails (props){
    const classes = useStyles();

    if (props.clicked === 0) {
      return <Redirect push to="/" />;
    }

    return (
      <Grid container spacing ={2} direction="column">
        
        <Grid container item spacing={2} >
          <Grid item xs={12} md={6}>
            <Card className={classes.root} variant="outlined">
              <CardMedia
                className={classes.media}
                image={"  https://github.com/guidesmiths/interview-code-challenges/blob/master/react/phone-catalogue/images/"+props.selected_phone.imageFileName+"?raw=true"}
                title={props.selected_phone.name }
              />
            </Card> 
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography className={classes.away} variant="h5" component="h2">
                  {props.selected_phone.name}
                </Typography>
                <Typography variant="h6" component="h2">
                  {props.selected_phone.manufacturer}
                </Typography>
                <Typography className={classes.giveMarginTop} variant="body1" component="h2">
                  {'Color: '}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {props.selected_phone.color}
                </Typography>
                <Typography variant="body1" component="h2">
                  {"Screen:      "}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {props.selected_phone.screen}
                </Typography>
                <Typography variant="body1" component="h2">
                  {'Processor:   '}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {props.selected_phone.processor}
                </Typography>
                <Typography variant="body1" component="h2">
                  {'RAM: '}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {props.selected_phone.ram}
                </Typography>
                <Typography variant="body1" component="h2">
                  {'Price: '}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {'€ ' + props.selected_phone.price}
                </Typography>
                <Typography className={classes.giveMarginTop} variant="subtitle1" component="h2">
                  {'Description: '}
                </Typography>
                <Typography variant="subtitle1" align="justify" component="h2">
                  {props.selected_phone.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Button className={classes.button} variant="contained" color="primary" onClick={props.phoneClicked}>Back To List</Button>
      </Grid>
    )
}

const mapStateToProps = state => ({
    selected_phone: state.getPhones.selected_phone,
    clicked: state.getPhones.clicked
})

const mapDispatchToProps = dispatch => {
  return{
    phoneClicked: () => dispatch(phoneClicked(0))
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(PhoneDetails);

