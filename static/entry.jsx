'use strict';

import React from 'react';
import GreetingBox from './jsx/greeting.jsx';
import Button from './jsx/button.jsx';
import Picture from './jsx/picture.jsx';

main();

function main() {
    React.render(
        <GreetingBox />,
        document.getElementById('initial-react')
    ); 
    React.render(
        <Picture />,
        document.getElementById('second-react')
    );
}
