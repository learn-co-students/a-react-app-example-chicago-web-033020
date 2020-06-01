import React, { Component } from 'react';
import moment from 'moment';
import { render } from 'enzyme';

function displayTime() {
    let clock = document.querySelector('#clock')
    clock.innerText = moment().format('MMMM Do YYYY, h:mm:ss a')
    setInterval(function() {
        clock.innerText = moment().format('MMMM Do YYYY, h:mm:ss a')
        clock.style.color = '#'+Math.floor(Math.random()*16777215).toString(16);
        clock.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    }, 1000)
}

export default class DisplayTime extends Component {

    render() {
        return (
        <header className="App-header">
                {displayTime()}
          </header>
        )
    }
}