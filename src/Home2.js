import React, {Component} from 'react';
import ProfileCreation from './Profiles/ProfileCreation.js';
import ProfileList from './Profiles/ProfileList.json';
import Profile from './Profiles/Profile.js';
import HomeImg from './Photos/HomeImg.jpg';

const titleStyle = {
    color: "#f3f3f3",
    fontSize: "20vh",
    margin: "0",
    padding: "15vh 1vh",
    backgroundImage: `url(${HomeImg})`,
    backgroundSize: "cover",
    textAlign: "centre"
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
                {this.isEmpty(ProfileList) ? <ProfileCreation /> : <Profile />}
            </div>
        );
    }
}

export default Home