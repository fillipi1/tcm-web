import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { styled } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
  }

  
class Points extends Component {

    state={
        category: this.props.category,
        value: 0
    }
    handleChange = (event, value) => {
        this.setState({ value });
      };
    render(){
        const { classes } = this.props;
        const { value } = this.state;
        return (
            <div style={{flexGrow: 1, width: '100%'}}>
                <AppBar position="static" color="default" style={{marginTop: -85}}>
                <Tabs
                    value={value}
                    onChange={this.handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    scrollable
                    scrollButtons="auto"
                    
                >
                    <Tab label="Lung" />
                    <Tab label="LI" />
                    <Tab label="Heart" />
                    <Tab label="SI" />
                    <Tab label="San Jiao" />
                    <Tab label="Pericardium" />
                    <Tab label="Kidney" />
                    <Tab label="Bladder" />
                    <Tab label="Liver" />
                    <Tab label="GB" />
                    <Tab label="Stomach" />
                    <Tab label="Spleen" />
                </Tabs>
                </AppBar>
                {value === 0 && 
                <TabContainer >
                    <TextField
                    label='location'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <TextField
                    label='attributes'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <TextField
                    label='indication'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <TextField
                    label='functions'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <TextField
                    label='Needling method'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <TextField
                    label='contra indications'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <MyButton>Submit</MyButton>
                </TabContainer>}
                {value === 1 && 
                <TabContainer>
                    <TextField
                    label='location'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <TextField
                    label='attributes'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <TextField
                    label='indication'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <TextField
                    label='functions'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <TextField
                    label='Needling method'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <TextField
                    label='contra indications'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <MyButton>Submit</MyButton>
                </TabContainer>}
                {value === 2 && 
                <TabContainer>
                    <TextField
                    label='location'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <TextField
                    label='attributes'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <TextField
                    label='indication'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <TextField
                    label='functions'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <TextField
                    label='Needling method'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <TextField
                    label='contra indications'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <MyButton2>Submit</MyButton2>
                </TabContainer>}
                {value === 3 && 
                <TabContainer>
                    <TextField
                    label='location'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <TextField
                    label='attributes'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <TextField
                    label='indication'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <TextField
                    label='functions'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <TextField
                    label='Needling method'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <TextField
                    label='contra indications'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <MyButton2>Submit</MyButton2>
                </TabContainer>}
                {value === 4 && 
                <TabContainer>
                    <TextField
                    label='location'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <TextField
                    label='attributes'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <TextField
                    label='indication'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <TextField
                    label='functions'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <TextField
                    label='Needling method'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <TextField
                    label='contra indications'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <MyButton2>Submit</MyButton2>
                </TabContainer>}
                {value === 5 && 
                <TabContainer>
                    <TextField
                    label='location'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <TextField
                    label='attributes'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <TextField
                    label='indication'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <TextField
                    label='functions'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <TextField
                    label='Needling method'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <TextField
                    label='contra indications'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <MyButton2>Submit</MyButton2>
                </TabContainer>}
                {value === 6 && 
                <TabContainer>
                    <TextField
                    label='location'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <TextField
                    label='attributes'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <TextField
                    label='indication'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <TextField
                    label='functions'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <TextField
                    label='Needling method'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <TextField
                    label='contra indications'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <MyButton3>Submit</MyButton3>
                </TabContainer>}
                {value === 7 && 
                <TabContainer>
                    <TextField
                    label='location'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <TextField
                    label='attributes'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <TextField
                    label='indication'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <TextField
                    label='functions'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <TextField
                    label='Needling method'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <TextField
                    label='contra indications'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <MyButton3>Submit</MyButton3>
                </TabContainer>}
                {value === 8 && 
                <TabContainer>
                    <TextField
                    label='location'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <TextField
                    label='attributes'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <TextField
                    label='indication'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <TextField
                    label='functions'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <TextField
                    label='Needling method'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <TextField
                    label='contra indications'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <MyButton4>Submit</MyButton4>
                </TabContainer>}
                {value === 9 && 
                <TabContainer>
                    <TextField
                    label='location'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <TextField
                    label='attributes'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <TextField
                    label='indication'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <TextField
                    label='functions'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <TextField
                    label='Needling method'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <TextField
                    label='contra indications'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <MyButton4>Submit</MyButton4>
                </TabContainer>}
                {value === 10 && 
                <TabContainer>
                    <TextField
                    label='location'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <TextField
                    label='attributes'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <TextField
                    label='indication'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <TextField
                    label='functions'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <TextField
                    label='Needling method'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <TextField
                    label='contra indications'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <MyButton5>Submit</MyButton5>
                </TabContainer>}
                {value === 11 && 
                <TabContainer>
                    <TextField
                    label='location'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <TextField
                    label='attributes'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <TextField
                    label='indication'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <TextField
                    label='functions'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <TextField
                    label='Needling method'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <TextField
                    label='contra indications'
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    style={{width:342, padding:3}}
                    />
                    <MyButton5>Submit</MyButton5>
                </TabContainer>}
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
  
  const MyButton = styled(Button)({
    background: 'linear-gradient(25deg, #00cefd 20%, #fff 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    width: '50%'
  });
  const MyButton2 = styled(Button)({
    background: 'linear-gradient(25deg, #fb2c36 20%, #fff 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    width: '50%'
  });
  const MyButton3 = styled(Button)({
    background: 'linear-gradient(25deg, #0005ad 20%, #fff 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    width: '50%'
  });
  const MyButton4 = styled(Button)({
    background: 'linear-gradient(25deg, green 20%, #fff 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    width: '50%'
  });
  const MyButton5 = styled(Button)({
    background: 'linear-gradient(25deg, #b36a0f 20%, #fff 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    width: '50%'
  });
  
  export default connect(mapStateToProps)(Points);