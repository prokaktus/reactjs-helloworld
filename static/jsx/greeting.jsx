var GreetingBox = React.createClass({
    render: function () {
        return (
            <div className="greetingBox">
              Hello, world!
            </div>
        );
    }
});

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

React.render(
    <GreetingBox />,
    document.getElementById('initial-react')
);
