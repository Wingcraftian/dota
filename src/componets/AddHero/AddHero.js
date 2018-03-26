import React, {Component } from "react";
// import "./AddHero.css";

class AddHero extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            primary_attr: "",
            attack_type: "",
            roles: ""
        };
        this.handleName = this.handleName.bind(this);
        this.handlePrimary_attr = this.handlePrimary_attr.bind(this)
        this.handleAttack_type = this.handleAttack_type.bind(this)
        this.handleRoles = this.handleRoles.bind(this)
        this.handleConfirm = this.handleConfirm.bind(this)
    }
    handleName(val) {
        this.setState({
            name: val
        });
    }
    handlePrimary_attr(val) {
        this.setState({
            primary_attr: val
        });
    }
    handleAttack_type(val) {
        this.setState({
            attack_type: val
        });
    }
    handleRoles(val) {
        this.setState({
            roles: val
        });
    }
    handleConfirm(val) {
        const { newHeroes } = this.props;
        const { name, primary_attr, attack_type, roles } = this.state;
        newHeroes(name, primary_attr, attack_type, roles)
        this.setState({
            name: "",
            primary_attr: "",
            attack_type: "",
            roles: ""

        });
    }
    render() {
        const {name, primary_attr, attack_type, roles} = this.state;
        return (
            <div className="add-main">
            <h3> Create Hero </h3>
            <input
            className="add-input"
            placeholder="name"
            value={name}
            onchange={e => this.handleName(e.target.value)} />
            
            <input
            className="add-input"
            placeholder="Primary_attr"
            value={primary_attr}
            onchange={e => this.handlePrimary_attr(e.target.value)} />

            <input
            className="add-input"
            placeholder="Attack_type"
            value={attack_type}
            onchange={e => this.handleAttack_type(e.target.value)} />

            <input
            className="add-input"
            placeholder="Role"
            value={roles}
            onchange={e => this.handleRoles(e.target.value)} />
           
            <button className= "add-button" onClick={this.handleConfirm}>
            Create
            </button>
           </div>
        );
    }
}
export default AddHero