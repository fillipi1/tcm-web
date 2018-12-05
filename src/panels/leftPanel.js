import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Reducer from '../redux/categoryReducer';



class LeftPanel extends Component {

    render(){
        return (
            <div style={{marginTop: 20, flexGrow: 1}}>
                {Reducer.map(x=> 
                    <ListItem 
                    button disableGutters divider style={styles.items}  >
                    <div onClick={console.log(x.category)}>
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

export default LeftPanel