'use strict';

import React from 'react';
import GreetingBox from './jsx/greeting.jsx';
import $ from 'jquery';

main();

function main() {
    React.render(
        <GreetingBox />,
        document.getElementById('initial-react')
    );
}
