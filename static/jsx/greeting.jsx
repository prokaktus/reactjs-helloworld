'use strict';
var React = require('react');

var FeedbackBox = React.createClass({
    render: function () {
        return (
            <div className="feedbackBox"></div>
        ); 
    } 
});

var BackgroundPics = React.createClass({
    render: function () {
        return ( <div className="backgroundPics"></div>);
    }
});

module.exports = React.createClass({
    render: function () {
        return (
            <div className="greetingBox">
              Hello, world!
            </div>
        );
    }
});
