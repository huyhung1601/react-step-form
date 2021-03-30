import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';


export class FormUserDeatails extends Component {
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }
    previous = e =>{
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const {values: {firstName, lastName, email,occupation, city, bio}} = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm User Data" />
                    <List>
                        <ListItem 
                            primaryText = 'First Name'
                            secondaryText= {firstName}
                        />
                        <ListItem 
                            primaryText = 'Last Name'
                            secondaryText= {lastName}
                        />
                        <ListItem 
                            primaryText = 'email'
                            secondaryText= {email}
                        />
                        <ListItem 
                            primaryText = 'occupation'
                            secondaryText= {occupation}
                        />
                        <ListItem 
                            primaryText = 'city'
                            secondaryText= {city}
                        />
                        <ListItem 
                            primaryText = 'bio'
                            secondaryText= {bio}
                        />
                    </List>
                    <br/>
                    <RaisedButton 
                        label = "Previous"
                        primary={true}
                        style = {styles.button}
                        onClick={this.previous}
                    />
                    <RaisedButton
                        label = 'Continue'
                        primary ={true}
                        style = {styles.button}
                        onClick = {this.continue}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
       margin: 15 
    }
}

export default FormUserDeatails
