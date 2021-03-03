import React from 'react';

class Search extends React.Component {
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
          console.log(this.state);
    };

    selectLocationKeys = (e) => {
        const activeOption = this.state.activeOption;
        const locations = this.props.locations;
        const userInput = e.currentTarget.value;
        const filteredOptions = locations.filter( (location) => location.town.toString().toLowerCase().indexOf(userInput.toLowerCase()) > -1 );
        if (e.keyCode === 13) {
            this.setState({
                activeOption: 0,
                filteredOptions: [],
                showOptions: false,
                userInput: filteredOptions[activeOption].town
            });
            this.props.getLocation(filteredOptions[activeOption].town);
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
                        <input type="text" name="location" placeholder="Enter your location" onKeyDown={(e) => this.selectLocationKeys(e)} value={this.state.userInput} onChange={(e) => {this.checkForLocation(e)}} ></input>
                        {this.showLocations()}
                    </form>
                </div>
            </>
        )
    }
}

export default Search;