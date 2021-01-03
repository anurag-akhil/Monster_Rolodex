import React, {Component, useState} from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from "./components/search_box/search-box.component";
import './App.css';
class App extends Component{
    constructor()
    {
        super();
        this.state = {
            monsters:[],
            searchField: ""
        };
    }
    async componentDidMount()
    {
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        let users = await response.json();
        this.setState({monsters: users});
    }

    handleChange = e =>{this.setState({searchField: e.target.value});};

    render(){

        const {monsters, searchField} = this.state;
        const filteredMonsters = monsters.filter(monster => 
            monster.name.toLowerCase().includes(searchField.toLowerCase()) 
            );
        return(
            <div className="App"> 
                <h1>Monster Rolodex</h1>
                <SearchBox
                    placeholder="search Monsters"
                    handleChange={this.handleChange}
                />
                <CardList monsters={filteredMonsters}/>
            </div>
        );
    }
}


export default App;
