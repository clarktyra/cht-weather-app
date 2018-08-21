import React from 'react';
import { getWeatherInfo, updateCitySearch } from "./navbarAction";

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.handleInformation = this.handleInformation.bind(this);
        this.handleCityInput = this.handleCityInput.bind(this);
        this.handleCityInformation = this.handleCityInformation.bind(this);
    }
    //    // (below) will give the history of all the cities that I clicked on 
    //    handleSearchHistory(){
    //     const {dispatch} = this.props;
    //     dispatch(getWeatherInfo(city));
    //    }
    handleCityInput(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(updateCitySearch(value));
    };
    // (below) will give the information of the cities that were looked up in the search bar
    handleInformation() {
        const { city, dispatch } = this.props;
        dispatch(getWeatherInfo(city));
    };
    // (below) will give the city weather information from the cities we can click
    handleCityInformation(value) {
        const { dispatch } = this.props;
        dispatch(getWeatherInfo(value));
    };
    render() {
        return (
            <div className = 'col-md-12'>
                <div className="row btn-group">
                        <button onClick={() => this.handleCityInformation("San Diego")} >San Diego</button>
                        <button onClick={() => this.handleCityInformation("Portland")} >Portland</button>
                        <button onClick={() => this.handleCityInformation("Tucson")} >Tucson</button>
                        <button onClick={() => this.handleCityInformation("Denver")} >Denver</button>
                        <button onClick={() => this.handleCityInformation("Asheville")} >Asheville</button>
                        <button onClick={() => this.handleCityInformation("Baltimore")} >Baltimore</button>
                </div>
                <div className="row" >
                    <input 
                    className="search " 
                    type="text" 
                    value={this.props.city} 
                    placeholder="Search" 
                    onChange={this.handleCityInput}>
                    </input>

                    <button 
                    className="btn" 
                    type="button submit" 
                    onClick={this.handleInformation}>
                    Search
                    </button>
                </div>
            </div>
        );
    }
}