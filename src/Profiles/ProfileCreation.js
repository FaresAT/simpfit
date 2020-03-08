import React, {Component} from 'react';

const introStyle = {
    backgroundColor: "#249ded",
    color: "#f3f3f3",
    fontSize: "40px",
    margin: "0",
    padding: "10vh 8vh",
    textAlign: "center"
};

const formStyle = {
    backgroundColor: "#f3f3f3",
    color: "#3d3d3d",
    fontSize: "25px",
    margin: "0",
    padding: "10vh 8vh",
    textAlign: "center"
};

const textboxStyle = {
    display: "flex",
    alignItems: "center",
    padding: "0 38vw",
}

let fs = require("fs");

class ProfileCreation extends React.Component {
    constructor() {
        super();
        this.state = {
                name: "",
                weight: "",
                height: "",
                BMI: null,
                heartRate : null,
                heartRateQ: {
                    faint: false,
                    breathing: false,
                    chest: false  
                },
                times_week: "",
                own_cook: "",
                best_you: ""
            }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({ [name] : value })
    }

    handleSubmit(event){
        fs.writeFile("./ProfileList.json", JSON.stringify(this.state), (err) => {
            if (err) {
                console.error(err);
                return;
            };
            console.log("File has been created");
        });
    }

    render(){
        return(
            <div>
                <p style={introStyle}>
                    <p>Welcome to SiMPFiT, the beginner friendly fitness app.</p>
                    <p>Let us get to know you better!</p>
                </p>
                <form onSubmit={this.handleSubmit} style = {formStyle}>
                        <div style={textboxStyle}>
                        <p>Name</p>
                        <input 
                        type = "text" 
                        value ={this.state.name} 
                        property= "name" 
                        onChange = {this.handleChange}
                        /> 
                        </div>
                        <div style={textboxStyle}>
                        <p>Weight</p>
                        <input 
                        type = "text" 
                        value = {this.state.weight}
                        property ="weight" 
                        onChange ={this.handleChange}
                        />
                        </div>
                        <div style={textboxStyle}>
                        <p>Height</p>
                        <input 
                        type = "text" 
                        value = {this.state.height}
                        property ="height" 
                        onChange ={this.handleChange}
                        />
                        </div>

                    <form>
                        <p>How many times a week do you eat out?</p>
                        <label>
                            <input 
                            type = "radio" 
                            name = "times_week"
                            value = "3"
                            checked = {this.state.times_week === "3"}
                            onChange = {this.handleChange}
                            /> More than 3 times a week
                        </label>
                        <br />
                        <label>
                            <input 
                            type = "radio" 
                            name = "times_week"
                            value = "2"
                            checked = {this.state.times_week === "2"}
                            onChange = {this.handleChange}
                            /> 1-2 times a week
                        </label>
                        <br />
                        <label>
                            <input 
                            type = "radio" 
                            name = "times_week"
                            value = "1"
                            checked = {this.state.times_week === "1"}
                            onChange = {this.handleChange}
                            /> Less than once a week
                        </label>
                        <br />
                        <br />
                    </form>
                        
                    <form>
                        <p>Do you cook your own meals, often?</p>
                        <label>
                            <input 
                            type = "radio" 
                            name = "own_cook"
                            value = "3"
                            checked = {this.state.own_cook === "3"}
                            onChange = {this.handleChange}
                            /> Yes
                        </label>
                        <br />
                        <label>
                            <input 
                            type = "radio" 
                            name = "own_cook"
                            value = "1"
                            checked = {this.state.own_cook === "1"}
                            onChange = {this.handleChange}
                            /> No
                        </label>
                        <br />
                        <br />
                    </form>
                        
                    <form>
                        <p>Pick the option that best describes you: </p>
                        <label>
                            <input 
                            type = "radio" 
                            name = "best_you"
                            value = "3"
                            checked = {this.state.best_you === "3"}
                            onChange = {this.handleChange}
                            /> If it tastes good I eat it
                        </label>
                        <br />
                        <label>
                            <input 
                            type = "radio" 
                            name = "best_you"
                            value = "1"
                            checked = {this.state.best_you === "1"}
                            onChange = {this.handleChange}
                            /> I try to keep a balanced diet
                        </label>
                        <br />
                        <label>
                            <input 
                            type = "radio" 
                            name = "best_you"
                            value = "2"
                            checked = {this.state.best_you === "2"}
                            onChange = {this.handleChange}
                            /> I don't really know
                        </label>
                        <br/>
                        <br/>
                    </form>
                    
                    <button style={{padding: "10px 20px", textSize: "30px"}} type="submit" >Submit Data</button>
                </form>
            </div>
        );
    }
}

export default ProfileCreation