import React from 'react';

class SearchBar extends React.Component{
    state={term:''};//para guardar los datos ingresados por el usuario (convertir una entrada no controlada a una contorlada)
    onInputChange =(event)=>{
        this.setState({term: event.target.value});
    };

    onFormSubmit = (event) =>{
        event.preventDefault();

        //asegurarse de llamar "callback" del componente padre(App)
        this.props.onFormSubmit(this.state.term);//llamada al componente padre
    };
    render(){
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Search Video</label>
                        <input 
                        className="text" 
                        value={this.state.term}
                        onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;