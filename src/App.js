import React, { Component } from 'react';
import logo from './logo.svg';
import axios from "axios";
import Hero from "./componets/Hero/Hero";
import AddHero from "./componets/AddHero/AddHero";
import './App.css';
import Title from './componets/Title/Title';

class App extends Component {
  constructor(){
    super();
    this.state = {
      heroes: [],
      title: "Heroes"
    }
    this.updateHeroes = this.updateHeroes.bind(this);
    this.deleteHeroes = this.deleteHeroes.bind(this);
    this.postHeroes = this.postHeroes.bind(this);
  }
  componentDidMount(){
axios
.get("/api/heroes").then(res => {
  console.log(res.data)
  this.setState({heroes: res.data});
})
.catch(console.log);
  }



  updateHeroes(id, name) {
    // console.log("updating", id, name)
   axios
   .put(`/api/heroes/${id}`, { name})
   .then(res => { 
    // console.log("responding") 
    this.setState({ heroes: res.data});
  })
  .catch(console.log)
  }


  deleteHeroes(id){
   axios
   .delete(`/api/heroes/${id}`).then(res => {
     this.setState({
       heroes: res.data
     });
   })
   .catch(console.log);
  }

  
  postHeroes(name, primary_attr, attack_type, roles) {
   axios

   .post("/api/heroes", {name, primary_attr, attack_type, roles})
   .then(res => {this.setState({
     heroes: res.data
   });
  })
  .catch(console.log);
  }



  
  
  
  
  
  
  render() {
    const {title, heroes } = this.state;
    let heroesList = heroes.map(heroes => {
      return (
        
        <Hero
        key={heroes.id}

updateHero = {this.updateHeroes}
deleteHeroes = {this.deleteHeroes}
postHeroes = {this.deleteHeroes}
        id={heroes.id}
        name={heroes.name}
        primary_att={heroes.primary_attr}
        attack_type={heroes.attack_type}
        roles={heroes.roles}
        />
      );
    });

    return (
      <div className="App">
      <Title header = {title}/>
        <header className="App-header">
        <img id= "logo" src={logo.png} alt="" />
        </header>
        <div className="App-body">
         <div className="add-container">
         <AddHero postHeroes={this.postHeroes} />
         </div>
         <h3>Hero List</h3>
         <div className="card-container">{heroesList}</div>
        </div>
      </div>
    );
  }
}

export default App;
