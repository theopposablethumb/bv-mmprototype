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
        location: null
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
                this.setState(state => ({list: health}))
                break;
            case 'leisure':
                this.setState(state => ({list: leisure}))
                break;
            case 'home':
                this.setState(state => ({list: home}))
                break;
            case 'security':
                this.setState(state => ({list: security}))
                break;
            case 'memory':
            case 'medication':
            case 'mobility':
            case 'hearing':
            case 'vision': 
            case 'gardening':
            case 'arts':
            case 'puzzles':
            case 'exercise':
            case 'hobbies':
            case 'pets':
            case 'listening':
            case 'chores':
            case 'DIY':
            case 'stairs':
            case 'Cooking and meals':
            case 'cooking':
            case 'emergencies':
            case 'alone':
            case 'kitchen':
            case 'bathroom':
                this.setState(state => ({list: support, complete: 'support'}))
                break;
            case 'yes':
                this.setState(state => ({list: week, complete: 'schedule'}));
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
        this.setState(state => ({list: initValues, answers: [], days: [], active: [], title: 'What do you need help with?', complete: false, location: null}));
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
                    <Listings answers={this.state.answers} days={this.state.days} location={this.state.location} />
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