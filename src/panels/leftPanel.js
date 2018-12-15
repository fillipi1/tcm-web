import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ListItem from '@material-ui/core/ListItem';
import Reducer from '../redux/categoryReducer';
import { selectCategory } from '../redux/actions';



class LeftPanel extends Component {

    state={
        category: this.props.category
    }
    render(){
        return (
            <div style={{marginTop: 20, flexGrow: 1}} >
                {Reducer.map(x=> 
                    <ListItem 
                    key={x.category}
                    button disableGutters divider style={styles.items}  onClick={() => this.props.selectCategory(x)} >
                    <div> 
                    {x.category}
                    </div>                       
                    </ListItem>)}
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
  
  function mapDispachToProps (dispatch) {
    return bindActionCreators({ selectCategory }, dispatch);
  }
  
  export default connect(mapStateToProps, mapDispachToProps)(LeftPanel);