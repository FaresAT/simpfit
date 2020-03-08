import React, {Component} from 'react';
import {subscribe} from 'mqtt-react'

import ProfileCreation from './Profiles/ProfileCreation.js';
import ProfileList from './Profiles/ProfileList.json';
import Profile from './Profiles/Profile.js';
import HomeImg from './Photos/HomeImg.jpg';

const MessageList = (props) => (
    <ul>
      {props.data.map( message => <li>{message}</li> )}
    </ul>
  );

const titleStyle = {
    color: "#f3f3f3",
    fontSize: "20vh",
    margin: "0",
    padding: "30vh 1vh",
    backgroundImage: `url(${HomeImg})`,
    backgroundSize: "cover",
    textAlign: "centre"
};

const footerStyle = {
    backgroundColor: "#249ded",
    color: "#f3f3f3",
    fontSize: "15px",
    margin: "0",
    padding: "3vh 8vh",
    textAlign: "center"
};

class Home extends React.Component {
    constructor() {
        super();
    }

    isEmpty(obj) {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    render(){

        return(
            <div>
                <div style={titleStyle}>
                    <h1 style={{fontSize: "15vh", textAlign: "center"}}>SiMPFiT</h1>
                </div>
                <Connector mqttProps="ws://104.238.164.118/mqtt">{this.isEmpty(ProfileList) ? <ProfileCreation /> : <Profile />}</Connector>
                <div style={footerStyle}>
                    <p>Jerry Bi, Bryan Nguyen</p>
                    <p>Lu Yao Chen, Fares Al-Tantawi</p>
                </div>
            </div>
        );
    }
}

export default Home