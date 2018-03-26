import React, { Component } from "react";
import "./Hero.css";
import axios from "axios";

class Hero extends Component {
    constructor(props) {
        super();
        this.state = {
        //   flag: false,

            name: props.name,
            primary_attr: props.primary_attr,
            attack_type: props.attack_type,
            roles: props.roles,

            inputSwitch: false
        };
        // this.handleFlag = this.handleFlag.bind(this);
        this.handleSwitch = this.handleSwitch.bind(this);
        this.handleName = this.handleName.bind(this);
        // this.handlePrimary_attr = this.handlePrimary_attr.bind(this)
        // this.handleAttack_type = this.handleAttack_type.bind(this)
      
        this.handleConfirm = this.handleConfirm.bind(this)
    }
    handleSwitch() {
        this.setState({
            inputSwitch: !this.state.inputSwitch
        });
    }
// handleFlag(){
//     this.setState({flag: !this.state.flag});
// }

    handleName(val) {
        this.setState({
           name: val
        });
    }

    // handlePrimary_attr(val) {
    //     this.setState({
    //         primary_attr: val
    //     });
    // }

    // handleAttack_type(val) {
    //     this.setState({
    //         attack_type: val
    //     });
    // }

   
 
    handleConfirm() {
        
        const { updateHero, id } = this.props;
        const { name } = this.state;
        updateHero(id, name);
        this.setState({
            inputSwitch: !this.state.inputSwitch
        });
    }


// render(){
//     let {deleteHeroes,heroes,editHeroes} = this.props;
//     let {name, primary_attr, attack_type, roles} = this.state;
//     var heroList = heroes.map((e,i)=>{
//         return  (
//             <div key={e.id}>
//             <h4>{e.name}</h4>
//             <h2>{e.id}</h2>
//             <img src={e.image} height = "100px" width ="100px"/>
            
//             {!this.state.flag ?
 
//             <div>
//                 <button onClick={()=>this.props.deleteHeroes(e.id)}>Delete Character</button>
//                 <button onClick={this.handleFlag}>Edit Name</button>
//             </div>    
//                 :
//             <div>    
//             <input onChange={e=> this.handleName(e.target.value)} />
//             <button onClick = {this.handleFlag}>Go Back</button>
//             <button onClick = {()=>editHeroes(e.id,name)}>Confirm</button> </div>}
//             </div>
//             )
//         })
        
//         return(
//             <div>
//             {heroList}
//             </div>
            

        
//         );
//     }
// }





render(){
    const { deleteHero, id} = this.props;
    const { inputSwitch, name, primary_attr, attack_type, roles} = this.state;
    return (
        <div className="card-main">
        {!inputSwitch ? (
            <div>
                <h4>{this.props.name}</h4>
                <h4>{this.props.primary_attr}</h4>
                <h4>{this.props.attack_type}</h4>
                <h4>{this.props.roles}</h4>
                <button className="card-button" onClick={this.handleSwitch}>
                 Edit
                </button>
                <button className="card-button" onClick={() => deleteHero(id)}>
                 Delete
                 </button>

                </div>
        ) : (
            <div> 
                <input 
                className="card-input"
                value={name}
                onChange={e => this.handleName(e.target.value)}
                />
                <button className="card-button" onClick={this.handleSwitch}>
                Cancel
                </button>
                
                <button className="card-button" onClick={this.handleConfirm}>
                Confirm
                </button>
                </div>
        )}
        </div>
    )
  }
}


export default Hero;