import React from 'react';
import Listing from './Listing';

const health = [{title:'Memory and Mood', name: 'memory'}, {title: 'Medication', name: 'medication'}, {title: 'Mobility', name: 'mobility'}, {title: 'Hearing', name: 'hearing'}, {title: 'Vision', name: 'vision'}];
const leisure = [{title: 'Gardening and outdoors', name: 'gardening'}, {title: 'Exercise and fitness', name: 'exercise'}, {title: 'Hobbies and leisure', name: 'hobbies'}, {title: 'Caring for pers', name: 'pets'}, {title: 'Listening to music, radio, or audio books', name: 'listening'}];
const home = [{title: 'House hold chores and hygiene', name: 'chores'}, {title: 'DIY and maintenance', name: 'DIY'}, {title: 'Stairs', name: 'stairs'}, {title: 'Cooking and meals', name: 'cooking'}];
const security = [{title: 'Help in emergencies', name: 'emergencies'}, {title: 'Living alone', name: 'alone'}, {title: 'Living alone', name: 'alone'}, {title: 'In the kitchen', name: 'kitchen'}, {title: 'In the bathroom', name: 'bathroom'}];

const support = [{title: 'Yes', name: 'yes'}, {title: 'No', name: 'no'}];
const week = [{title: 'Monday', name: 'monday'}, {title: 'Tuesday', name: 'tuesday'}, {title: 'Wednesday', name: 'wednesday'}, {title: 'Thursday', name: 'thursday'}, {title: 'Friday', name: 'friday'}, {title: 'Saturday', name: 'saturday'}, {title: 'Sunday', name: 'sunday'}];

const initValues = [
    {title: 'Health and Wellbeing', name: 'health'}, 
    {title: 'Leisure and Play', name: 'leisure'}, 
    {title: 'Living at Home', name: 'home'},
    {title: 'Security', name: 'security'}
];


class Questions extends React.Component {
    state = {
        title: 'What do you need help with?',
        answer: null,
        answers: [],
        days: [],
        list: initValues,
        complete: false,
        active: []
    };

    nextLevel = (answer, title) => {
        this.setState(state => ({
            answer: answer,
            answers: [...this.state.answers, title],
            title: title
        }));
        this.assignNextLevel(answer);
    }

    nextLevelDays = (answer, e) => {
        e.preventDefault();
        this.assignNextLevel(answer);
    }

    activeDay = (day) => {
        this.setState(state => ({active: [...this.state.active, day]}));
    }

    selectDays = (day) => {
        let days = this.state.days;
        if (!days.includes(day)) {
            this.setState(state => ({days: [...this.state.days, day]}))
        }
        console.log(this.state.active);
        this.activeDay(day);
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
        return list.map(list => <li key={list.name}><button onClick={() => {this.nextLevel(list.name, list.title)}}>{list.title}</button></li>)
    }

    renderDays = () => {
        let list = this.state.list;
        return (
            <>
                <ul>
                    {list.map(list => <li key={list.name}><button className={this.state.active.includes(list.title) ? 'selected' : ''} onClick={() => {this.selectDays(list.title)}}>{list.title}</button></li>)}
                </ul>
                <button className="next right" onClick={(e) => this.nextLevelDays(list.title, e)}>Next</button>
            </>
        )
    }

    reset = () => {
        this.setState(state => ({list: initValues, answers: [], days: [], active: [], title: 'What do you need help with?', complete: false}));
    }

    renderContent = () => {
        if (this.state.complete === false) {
            return(
                <>
                    <h2>{this.state.title}</h2>
                    <div className="questions">
                        <ul>
                            {this.renderNextLevel()}
                        </ul>
                        <button className="reset left" onClick={() => {this.reset()}}>Start again</button>
                    </div>
                </>
            );
        } else if (this.state.complete === 'support') {
            return(
                <>
                    <h2>Would you like regular support from one of our Wellbeing Teams in your home?</h2>
                    <div className="questions">
                        <ul>
                            {this.renderNextLevel()}
                        </ul>
                        <button className="reset" onClick={() => {this.reset()}}>Start again</button>
                    </div>
                </>
            )
        } else if (this.state.complete === 'schedule') {
            return(
                <>
                    <h2>When would you like regular support?</h2>
                    <div className="questions week">
                            {this.renderDays()}
                        <button className="reset" onClick={() => {this.reset()}}>Start again</button>
                    </div>
                </>
            )
        } else {
            return(
                <>
                    <Listing answers={this.state.answers} days={this.state.days} />
                    <button className="reset" onClick={() => {this.reset()}}>Start again</button>
                </>
            )
        }
    }

     render() {
         return(
             <> 
                {this.renderContent()}
             </>
         );
     }
} 

export default Questions;