import React from 'react';
import './Searchbar.css';

// esempio di componente controllato

export default class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue : ""
    };
  }

  saveSearch = (event) => {
    this.setState({
      searchValue : event.target.value
    })
  }

  searchClick = (event) => {
    event.preventDefault();
    this.props.onsearch(this.state.searchValue);
  }
  

  render() {
    return (
      <>
        {this.props.burger?(
          <form className="form-inline-1 d-flex row">
          <input className="form-control mr-sm-2" type="search" placeholder="Inserisci Titolo" aria-label="Search" onChange={this.saveSearch} value={this.state.searchValue} />
          <button type="submit" onClick={this.searchClick}>S</button>
          </form>     
        ):(
          <form className="form-inline  d-flex row">
          <input className="form-control mr-sm-2" type="search" placeholder="Inserisci Titolo" aria-label="Search" onChange={this.saveSearch} value={this.state.searchValue} />
          <button type="submit" onClick={this.searchClick}>S</button>
          </form>
                 
        )
        } 

       
      </>
    )
  }
}