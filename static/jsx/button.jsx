'use strict';
import React from 'react';
import _ from 'lodash';
import $ from 'jquery';
import bootstrap from 'bootstrap-sass';

export default class Button extends React.Component {
    render() {
        return (
            <button type="button" className="btn btn-default"
                    data-toggle="tooltip" data-placement="left"
                    title="Tooltip on left">Tooltip on left
            </button>
        );
    }
};
