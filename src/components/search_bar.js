import React, { Component } from 'react';

//a functional component can contain a class based component. that's fine.

class SearchBar extends Component {
    //define state in a class based component. functional components dont have state. 
    //constructor function is called automatically whenever a new instance of this class is created.
    //reserved for initializing variables and state. 
    constructor(props){
        super(props);
        
        //term will be updated, that is our intention.
        //this is the only place u explcitly declare state, rest of the time u gotta use this.setState()
        //the property name of term is arbitrary. It can be anything, in this case term as in search term.
        this.state = { term: '' };
    }
    
    // the render FUNCTION
    render () {
        
        return (
            <div className="search-bar">
            {/* onChange input handler, passed to onChange, will be called when theres a change*/}
            {/* with the value key, the <input> is now a CONTROLLED form element 
                the user input updates the state whenever the state changes! */}
                                        
                <input 
                    value={this.state.term}
                    onChange={(event) => this.onInputChange(event.target.value) } 
                    placeholder="Search..." />
            </div>
        );
    }
    
    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
    //handleInputChange is also common as a name
    //event handler needs (event) object! can call it e also
    //it describes the context.
    // onInputChange(event) {
    //     console.log(event.target.value);
    // }
}

//state is used to record user events. Every component has a state object, forces children to re-render.

export default SearchBar;

