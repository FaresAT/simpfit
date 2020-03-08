import React,{Component} from 'react';

import Nutrition from './ProfileComponents/Nutrition';
import Schedule from './ProfileComponents/Schedule';
import ProfileList from './ProfileList.json';

const mqtt = require('mqtt')
const client = mqtt.connect('ws://104.238.164.118:8803/mqtt')

client.on('messageRecieved', (message) => {
    if (responseObject.errorCode !== 0) {
        console.log(responseObject.errorMessage);
    }
});

client.on('messageRecieved', (responseObject) => {
    var msg = message.payloadString;

    console.log(msg)
})

client.connect()
    .then(() => {
        console.log('onConnect');
        return client.subscribe('bot/location');
    })
    .then(() => {
        console.log('connected');
    })
    .catch((responseObject) => {
        if (responseObject.errorCode !== 0) {
            console.log('onConnectionLost: ' + responseObject.errorMessage);
        }
    });


const profileStyle = {
    backgroundColor: "#f3f3f3",
    color: "#3d3d3d",
    fontSize: "30px",
    margin: "0",
    padding: "10vh 8vh",
    textAlign: "center"
};

const titleStyle = {
    backgroundColor: "#3d3d3d",
    color: "#3f3f3f",
    fontSize: "30px",
    margin: "0",
    padding: "10vh 8vh",
    textAlign: "center"
};

class Profile extends React.Component {
    constructor(){
        super();
        this.state = {
            ...ProfileList,
            updateUser: false,
            BPMfromMQTT: null
        }
        this.causeChange = this.causeChange.bind(this);
    }

    causeChange(event){
        this.setState({
            updateUser: true
        });
    }

    render(){
        return(
            <div style={titleStyle}>
                {this.state.user ? 
                <div>
                    <button>Select a User</button>
                </div> : 
                <div>
                    <h1>Welcome {this.state.user}</h1>
                    {this.state.updateUser ?
                        <div> 
                        </div>
                        :
                        <div style={profileStyle}> 
                            <Nutrition user={this.state.user}/>
                            <Schedule user={this.state.user}/>
                            <button style={{padding: "10px 20px", textSize: "30px"}} onClick={this.causeChange}>Need something changed?</button>
                        </div>
                    }
                </div>}
            </div>
        );
    }
}

export default Profile;