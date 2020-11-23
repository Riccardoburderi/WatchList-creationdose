import React from 'react';
import './navbar.css';
import {NavLink} from 'react-router-dom';
import Searchbar from './Searchbar';

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
      }
      /* */
    render() {
        return (
            <div className="nav px-3">

                {
                this.props.config.routes.map((ele)=>{
                    return <NavLink className="nav-item" exact to={ele.to}>{ele.label}</NavLink>
                })
                }
                {this.props.config.search?<Searchbar onsearch={this.props.onsearch} burger={this.props.burger}></Searchbar> : ''} 
            </div>
        )
    }
}