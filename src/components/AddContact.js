import React from "react";

class AddContact extends React.Component {
    state = {
        name: "",
        email: "",
        place: ""
    }
    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === "" || this.state.place === "") {
            alert("All fields are mandetory");
            return;
        }
    this.props.AddContactHandler(this.state);
    this.setState({name:"", email:"", place:""});
}

render() {
    return (
        <div className="main">
            <h1>Add AddContact</h1>
        </div>
    )
}
}