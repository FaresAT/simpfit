import React from 'react';

const formStyle = {
    backgroundColor: "#f3f3f3",
    color: "#3d3d3d",
    fontSize: "40px",
    margin: "0",
    padding: "10vh 8vh",
    textAlign: "center"
};

class GeneralForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            weight: "",
            height: "",
            times_week: "",
            BMI: null,
            own_cook: "",
            best_you: "",
        }
        this.handleBMI = this.handleBMI.bind(this);
        this.handleChange = this.handleChange.bind(this)
        this.updateParent = this.updateParent.bind(this)
    }
    
    handleBMI() {
        this.setState({
            BMI: this.state.user.weight/(this.state.user.height*this.state.user.height)
        })
    }

    handleChange(event) {
        const {name, value, checked} = event.target
        this.setState({ [name] : value })
    }

    updateParent(event) {
        this.props.updateState();
    }

    render(){
        return(
            <div style={formStyle}>
                <form onSubmit={this.props.handleSubmit} >
                <form>
                    {console.log(this.props.name)}
                    <p>Name: </p>
                    <input 
                    type = "text" 
                    value ={this.props.name} 
                    property= "name" 
                    onChange = {this.handleChange}
                    /> 
                    <br />
                    <p>Weight:</p>
                    <input 
                    type = "text" 
                    value = {this.props.weight}
                    property ="weight" 
                    onChange ={this.handleChange}
                    />
                    <br />
                    <p>Height: </p>
                    <input 
                    type = "text" 
                    value = {this.props.height}
                    property ="height" 
                    onChange ={this.handleChange}
                    />
                    <br />
                    <br />
                </form>
                
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
                        value = "2"
                        checked = {this.state.best_you === "2"}
                        onChange = {this.handleChange}
                        /> I try to keep a balanced diet
                    </label>
                    <br />
                    <label>
                        <input 
                        type = "radio" 
                        name = "best_you"
                        value = "1"
                        checked = {this.state.best_you === "1"}
                        onChange = {this.handleChange}
                        /> I don't really know
                    </label>
                    <br/>
                    <br/>
                </form>
                
                <button onClick={this.props.updateState} type="submit" >Submit</button>
        </form>
       </div>
        );
    }
}

export default GeneralForm