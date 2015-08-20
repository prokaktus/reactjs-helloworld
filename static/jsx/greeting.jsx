'use strict';
import React from 'react';

class FeedbackBox extends React.createClass{
    render() {
        return (
            <div className="feedbackBox"></div>
        ); 
    }
};

class BackgroundPics extends React.Component {
    render() {
        return ( <div className="backgroundPics"></div>);
    }
};

export default class GreetingBox extends React.Component {
    render() {
        return (
            <div className="greetingBox">
              Hello, world!
            </div>
        );
    }
};
