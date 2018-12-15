import React, { Component } from 'react';
import { connect } from 'react-redux';
import Points from '../components/points';
import Herbs from '../components/herbs';
import Bio from '../components/bio';
import Laws from '../components/laws';


class RightPanel extends Component {

    render(){
        console.log(this.props.category)
        if(this.props.category.category === 'points')
        {
            return (
            <div style={{ marginTop: 100}}>
                <Points/>
            </div>)
        }
        if(this.props.category.category === 'herbs')
        {
            return (
            <div style={{ marginTop: 100}}>
                <Herbs/>
            </div>)
        } if(this.props.category.category === 'Laws/Reg') {
            return (
                <div style={{ marginTop: 100}}>
                    <Laws/>
                </div>)
        }  else {
            return (
                <div style={{ marginTop: 100}}>
                    <Bio/>
                </div>)
        }

        
    }
}

function mapStateToProps(state) {
    return {
      category: state.category
    };
  } 

  export default connect(mapStateToProps)(RightPanel);