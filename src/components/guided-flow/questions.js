import React from 'react';
import LocationSearch from '../LocationSearch';
import Options from './Options';
import Days from './Days';
import Listings from './Listings';
import {capitaliseFirstLetter} from '../../util/helpers';
import {locations, health, leisure, security, home, support, week, initValues} from '../../data';

class Questions extends React.Component {
    state = {
        title: 'What do you need help with',
        answer: null,
        answers: [],
        days: [],
        list: initValues,
        complete: false,
        active: [],
        location: null,
        support: false
    };

    getLocation = (loc) => {
        loc = capitaliseFirstLetter(loc);
        this.setState(state => ({location: loc}));
    }

    selectDays = (day) => {
        let days = this.state.days;
        if (!days.includes(day)) {
            this.setState(state => ({days: [...this.state.days, day]}))
        }
    }

    nextLevel = (answer, title) => {
        this.setState(state => ({
            answer: answer,
            answers: [...this.state.answers, title],
            title: title
        }));
        this.assignNextLevel(answer);
    }

    assignNextLevel = (answer) => {
        switch(answer) {
            case 'health':
                this.setState(state => ({list: health, complete: false}))
                break;
            case 'leisure':
                this.setState(state => ({list: leisure, complete: false}))
                break;
            case 'home':
                this.setState(state => ({list: home, complete: false}))
                break;
            case 'security':
                this.setState(state => ({list: security, complete: false}))
                break;
            default:
                this.setState(state => ({complete: true}))
                break;
        }
    }

    renderNextLevel = () => {
        let list = this.state.list;
        return list.map(list => <li key={list.name}><button onClick={() => {this.nextLevel(list.name, list.title)}}>{list.title}</button></li>);

    }

    reset = () => {
        this.setState(state => ({list: initValues, answers: [], days: [], active: [], title: 'What do you need help with?', complete: false, location: null, support: false}));
    }

    backALevel = (level, title) => {
        this.nextLevel(level, title);
        console.log(this.state);
    }

    chooseLocation = () => {
        if (!this.state.location) {
            return <LocationSearch locations={locations} getLocation={this.getLocation} />;
        } else {
            return this.renderContent();
        }
     }

    renderContent = () => {
        if (this.state.complete === false) {
            return(
                <>  
                    <Options nextLevel={this.renderNextLevel} title={this.state.title} complete={this.state.complete} location={this.state.location} />
                    <div className="questions">
                        <button className="reset left" onClick={() => {this.reset()}}>Start again</button>
                    </div>
                </>
            );
        } else if (this.state.complete === 'support') {
            return(
                <>
                    <Options nextLevel={this.renderNextLevel} title={this.state.title} complete={this.state.complete} location={this.state.location} />
                    <div className="questions">
                        <button className="reset" onClick={() => {this.reset()}}>Start again</button>
                    </div>
                </>
            )
        } else if (this.state.complete === 'schedule') {
            return(
                <>
                    <h2>When would you like regular support?</h2>
                    <Days list={this.state.list} nextLevel={this.assignNextLevel}  selectDays={this.selectDays} />
                </>
            )
        } else {
            return(
                <>
                    <Listings answers={this.state.answers} days={this.state.days} location={this.state.location} support={this.state.support} back={this.backALevel} />
                    <button className="reset" onClick={() => {this.reset()}}>Start again</button>
                </>
            )
        }
    }

     render() {
         return(
             <> 
                {this.chooseLocation()}
             </>
         );
     }
} 

export default Questions;