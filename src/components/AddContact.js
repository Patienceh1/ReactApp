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
        this.setState({ name: "", email: "", place: "" });
    }

    render() {
        return (
            <div className="main">
                <h2>Add AddContact</h2>
                <form className="form" onSubmit={this.add}></form>
                <div className="field">
                    <label>Name</label>
                    <input type="text"
                        name="name"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={(e) => this.setState({ name: e.target.value })}></input>
                </div>
                <div className="field">
                    <label>Email</label>
                    <input
                    type="email"
                    email="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={(e) => this.setState({  email: e.target.value })}></input>
                </div>
                <div className="field">
                    <label></label>
                    <input
                    type="text"
                    place="place"
                    placeholder="Place"
                    value={this.state.place}
                    onChange={(e) => this.setState({ place: e.target.value })}></input>
                </div>
                <button className="button">Add</button>
            </div>
        )
    }
}
export default AddContact;