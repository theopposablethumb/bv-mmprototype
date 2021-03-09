import React from 'react';
import {locations, health, leisure, home, security } from './../../data';

class Search extends React.Component {
    state = {
        showOptions: false,
        filteredLocations: [],
        filteredServices: [],
        activeOption: 0,
        locationInput: '',
        serviceInput: ''
    }

    locations = locations;
    services = health.concat(leisure, home, security);

    checkForLocation = (e) => {
        const locations = this.locations;
        const userInput = e.currentTarget.value;
        const filteredOptions = locations.filter( (location) => location.town.toString().toLowerCase().indexOf(userInput.toLowerCase()) > -1 );
        this.setState({
            activeOption: 0,
            filteredLocations: filteredOptions,
            showOptions: true,
            locationInput: userInput
        });
    };

    selectLocation = (town, coords) => {
        this.setState({
            activeOption: 0,
            filteredLocations: {},
            showOptions: false,
            locationInput: {town: town, coords: coords}
          });
    };

    selectLocationKeys = (e) => {
        const activeOption = this.state.activeOption;
        const locations = this.locations;
        const userInput = e.currentTarget.value;
        const filteredOptions = locations.filter( (location) => location.town.toString().toLowerCase().indexOf(userInput.toLowerCase()) > -1 );
        if (e.keyCode === 13) {
            this.setState({
                activeOption: 0,
                filteredOptions: [],
                showOptions: false,
                locationInput: {town: filteredOptions[activeOption].town, coords: filteredOptions[activeOption].coords}
            });
        } else if (e.keyCode === 38) {
            if (activeOption === 0) {return;}
            this.setState({ activeOption: activeOption - 1 });
        } else if (e.keyCode === 40) {
            if (activeOption - 1 === filteredOptions.length) {return;}
            this.setState({ activeOption: activeOption + 1 });
        }
    };

    showLocations = () => {
        let showOptions = this.state.showOptions;
        let userInput = this.state.locationInput;
        let filteredOptions = this.state.filteredLocations;
        let activeOption = this.state.activeOption;

        if (showOptions && userInput) {
            if (filteredOptions.length) {
                return (
                    <ul className="options">
                        {filteredOptions.map((optionName, index) => {
                            let className;
                            if (index === activeOption) {className = 'active';}
                            return (<li className={className} key={optionName.town} onClick={(e) => this.selectLocation(optionName.town, optionName.coords)}>{optionName.town}</li>);
                        })}
                    </ul>
                );
            } else {
                return <ul className="options"><li>Try again</li></ul>;
            }
        }
    }




    checkForService = (e) => {
        const services = this.services;
        const userInput = e.currentTarget.value;
        const filteredOptions = services.filter( (service) => service.title.toString().toLowerCase().indexOf(userInput.toLowerCase()) > -1 );
        this.setState({
            activeOption: 0,
            filteredServices: filteredOptions,
            showOptions: true,
            serviceInput: userInput
        });
    };

    selectService = (e) => {
        this.setState({
            activeOption: 0,
            filteredServices: [],
            showOptions: false,
            serviceInput: e.currentTarget.innerText
          });
    };

    selectServiceKeys = (e) => {
        const activeOption = this.state.activeOption;
        const services = this.services;
        const userInput = e.currentTarget.value;
        const filteredOptions = services.filter( (service) => service.title.toString().toLowerCase().indexOf(userInput.toLowerCase()) > -1 );
        if (e.keyCode === 13) {
            this.setState({
                activeOption: 0,
                filteredOptions: [],
                showOptions: false,
                userInput: filteredOptions[activeOption].name
            });
        } else if (e.keyCode === 38) {
            if (activeOption === 0) {return;}
            this.setState({ activeOption: activeOption - 1 });
        } else if (e.keyCode === 40) {
            if (activeOption - 1 === filteredOptions.length) {return;}
            this.setState({ activeOption: activeOption + 1 });
        }
    };

    showServices = () => {
        let showOptions = this.state.showOptions;
        let userInput = this.state.serviceInput;
        let filteredOptions = this.state.filteredServices;
        let activeOption = this.state.activeOption;

        if (showOptions && userInput) {
            if (filteredOptions.length) {
                return (
                    <ul className="options">
                        {filteredOptions.map((optionName, index) => {
                            let className;
                            if (index === activeOption) {className = 'active';}
                            return (<li className={className} key={optionName.title} onClick={(e) => this.selectService(e)}>{optionName.title}</li>);
                        })}
                    </ul>
                );
            } else {
                return <ul className="options"><li>Try again</li></ul>;
            }
        }
    }

    render() {
        return (
            <>
                <h2>Where would you like support living your best life?</h2>
                <form autoComplete="off" className="min">
                    <fieldset>
                        <label htmlFor="location">Enter your location</label>
                        <input type="text" name="location" placeholder="Enter your location" onKeyDown={(e) => this.selectLocationKeys(e)} value={this.state.locationInput.town} onChange={(e) => {this.checkForLocation(e)}} ></input>
                        {this.showLocations()}
                        <button onClick={(e) => {this.props.setSearchTerms(e, this.state.locationInput, /*this.state.serviceInput*/)}} className="next">Search</button>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default Search;