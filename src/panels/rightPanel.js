import React, { Component } from 'react';
import { connect } from 'react-redux';

class RightPanel extends Component {

    render(){
        return (
            <div style={{ marginTop: 100}}>
                {this.props.category.category}
            </div>
        )
        
    }
}

function mapStateToProps(state) {
    return {
      category: state.category
    };
  } 

  export default connect(mapStateToProps)(RightPanel);