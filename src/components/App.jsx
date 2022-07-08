import { Component } from "react";
import FeedbackOptions from './FeedbackOptions'
import Statistics from "./Statistics";
import Section from "./Section/";
import Notification from "./Notification";


export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }


  goodCounter = () => {
       this.setState(( ) => {
       return {good: this.state.good  + 1}
      })
  };

  neutralCounter = () => {
       this.setState(( ) => {
       return {neutral: this.state.neutral  + 1}
      })
  };

  badCounter = () => {
       this.setState(( ) => {
       return {bad: this.state.bad  + 1};
      })
  }

  countTotalFeedback = () => {
    const total = Object.values(this.state).reduce((sum, accum)=> {return sum + accum})
    return total}
  

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const positivProc = this.state.good * 100 / total;
    return positivProc;
  }

  render() {
    const {good} = this.state;
    const {neutral} = this.state;
    const {bad} = this.state

  return (
    <div>
      <Section title = "Please leave feedback">
        <FeedbackOptions onGoodCounter = {this.goodCounter} 
                          onNeutralCounter ={this.neutralCounter}   
                          onBadCounter = {this.badCounter}/>
      </Section>

      {this.countTotalFeedback() > 0 ? 
      <Section title = "Statistics">         
           <Statistics good = {good} 
                        neutral = {neutral} 
                        bad = {bad} 
                        onCountTotalFeedback = {this.countTotalFeedback} 
                        onCountPositiveFeedbackPercentage = {this.countPositiveFeedbackPercentage}/>
       </Section> 
       : <Notification message = "There is no feedback"></Notification>}
     
    </div>
  );
   }
};
