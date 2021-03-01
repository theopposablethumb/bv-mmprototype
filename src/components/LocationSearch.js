import React from 'react';

class LocationSearch extends React.Component {
    state = {
        showOptions: false,
        filteredOptions: [],
        activeOption: 0,
        userInput: ''
    }

    checkForLocation = (e) => {
        const locations = this.props.locations;
        const userInput = e.currentTarget.value;
        const filteredOptions = locations.filter( (location) => location.town.toString().toLowerCase().indexOf(userInput.toLowerCase()) > -1 );
        this.setState({
            activeOption: 0,
            filteredOptions: filteredOptions,
            showOptions: true,
            userInput: userInput
        });
    };

    selectLocation = (e) => {
        this.props.getLocation(e.currentTarget.innerText);
        this.setState({
            activeOption: 0,
            filteredOptions: [],
            showOptions: false,
            userInput: e.currentTarget.innerText
          });
    };

    showLocations = () => {
        let showOptions = this.state.showOptions;
        let userInput = this.state.userInput;
        let filteredOptions = this.state.filteredOptions;
        let activeOption = this.state.activeOption;

        if (showOptions && userInput) {
            if (filteredOptions.length) {
                return (
                    <ul className="options">
                        {filteredOptions.map((optionName, index) => {
                            let className;
                            if (index === activeOption) {className = 'active';}
                            return (<li className={className} key={optionName.town} onClick={(e) => this.selectLocation(e)}>{optionName.town}</li>);
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
                <div className="questions">
                    <form autoComplete="off" className="location">
                        <input type="text" name="location" placeholder="Enter your location" value={this.state.userInput} onChange={(e) => {this.checkForLocation(e)}}></input>
                        {this.showLocations()}
                    </form>
                </div>
            </>
        )
    }
}

export default LocationSearch;