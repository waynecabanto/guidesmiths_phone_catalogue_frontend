import React, {Component} from 'react';
import {connect} from 'react-redux';
//import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import Loading from './Loading';
import Timer from 'react-compound-timer';

//redux
import {getPhones, phoneClicked} from '../redux/actions/getPhonesActions';
//import EachPhone from './EachPhone';
import PhoneCard from './PhoneCard';
import { Grid } from '@material-ui/core';




class PhonesList extends Component {


  constructor(props){
    super(props)
    this.state = {
      timer_done: false
    }
  }

  componentDidMount(){
    this.props.getPhones();
    this.props.phoneClicked(0);
  }

  
  

  render(){

    if (this.props.clicked === 1) {
      return <Redirect push to="/details" />;
    }

    if(this.props.failed && this.state.timer_done) {
      return (
        <div>
          <h1>Request failed. Failed to load props.</h1>
          <p>{'Error: ' + this.props.err}</p>
        </div>
      );
    }

    if(this.props.success && this.state.timer_done) {
      return (
        <Grid container spacing={2}>
          {this.props.phones.map((phone)=>(
            <Grid item xs={12} sm={6} md={4}>
            <PhoneCard phone={phone}/>
            </Grid>
          ))} 
        </Grid>
      );
    }

    return (
      <Grid container alignContent='center'>
        <Grid item xs={12}>
          <Timer
          initialTime={1000}
          direction="backward"
          timeToUpdate={10}
          checkpoints={[
              {
                  time: 0,
                  callback: () => this.setState({timer_done: true}),
              },
          ]}
          >
            <Loading/>
          </Timer>
        </Grid>
      </Grid>
    );

  }
  
}

const mapStateToProps = state => ({
    phones: state.getPhones.phones,
    selected_phone: state.getPhones.selected_phone,
    clicked: state.getPhones.clicked,
    success: state.getPhones.success,
    failed: state.getPhones.failed,
    loading: state.getPhones.loading,
    err: state.getPhones.err
})

export default connect(mapStateToProps, {getPhones, phoneClicked})(PhonesList);
