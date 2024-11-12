import React, { useEffect } from 'react';

function consoleText(words, id, colors) {
    if (colors === undefined) colors = ['#fff'];
    let visible = true;
    let letterCount = 1;
    let x = 1;
    let waiting = false;
    const target = document.getElementById(id);

    if (!target) {
        console.error(`Element with id ${id} not found.`);
        return;
    }

    target.setAttribute('style', 'color:' + colors[0]);

    window.setInterval(function () {
        if (letterCount === 0 && waiting === false) {
            waiting = true;
            target.innerHTML = words[0].substring(0, letterCount);
            window.setTimeout(function () {
                const usedColor = colors.shift();
                colors.push(usedColor);
                const usedWord = words.shift();
                words.push(usedWord);
                x = 1;
                target.setAttribute('style', 'color:' + colors[0]);
                letterCount += x;
                waiting = false;
            }, 1000);
        } else if (letterCount === words[0].length + 1 && waiting === false) {
            waiting = true;
            window.setTimeout(function () {
                x = -1;
                letterCount += x;
                waiting = false;
            }, 1000);
        } else if (waiting === false) {
            target.innerHTML = words[0].substring(0, letterCount);
            letterCount += x;
        }
    }, 120);

    window.setInterval(function () {
        if (visible === true) {
            document.getElementById('console').style.visibility = 'hidden';
            visible = false;
        } else {
            document.getElementById('console').style.visibility = 'visible';
            visible = true;
        }
    }, 400);
}

const ConsoleText = () => {
    useEffect(() => {
        consoleText(['Hello World.', 'A Glimpse of My Craft.', 'Made with Love.'], 'text', ['tomato', 'wheat', 'lightblue']);
    }, []);

    return (
        <div className='console-container'>
            <span id='text'></span>
            <div className='console-underscore' id='console'>&#95;</div>
        </div>
    );
};

export default ConsoleText;
