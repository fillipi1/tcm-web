import React, { Component } from 'react';
import { connect } from 'react-redux';




class Points extends Component {

    state={
        category: this.props.category
    }
    render(){
        return (
            <div style={{marginTop: 20, flexGrow: 1}} >
        SUP
          </div>
        )
        
    }
}
const styles = {
 items: {
    alignItems: 'center', 
    justifyContent: 'center'
 }
}

function mapStateToProps(state) {
    return {
      category: state.category
    };
  } 
  

  
  export default connect(mapStateToProps)(Points);