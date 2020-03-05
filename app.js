// variables
let arr = [];
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
const cells = document.querySelector('.cells');
let checkValue = 0;

// events
btn1.addEventListener('click', function() {
    printHTML(btn1.value, 'three');
    btn1.disabled = true;
    btn2.disabled = false;
    btn3.disabled = false;
});

btn2.addEventListener('click', function() {
    printHTML(btn2.value, 'four');
    btn1.disabled = false;
    btn2.disabled = true;
    btn3.disabled = false;
});

btn3.addEventListener('click', function() {
    printHTML(btn3.value, 'five');
    btn1.disabled = false;
    btn2.disabled = false;
    btn3.disabled = true;
});

// functions
function getRandom(max) {
    return Math.floor(Math.random() * Math.floor(max)) + 1;
}

function randArray(value) {
    arr = [];
    arr.push(getRandom(Math.pow(value, 2)));
    for (let i = 0; i < Math.pow(value, 2) - 1; i++) {
        let number = getRandom(Math.pow(value, 2));
        if(arr.indexOf(number) !== -1) {
            i--;
        } else {
            arr.push(number);
        }
    }

    return arr;
}

function printHTML(randValue, className) {
    randArray(randValue);
    cells.innerHTML = '';
    checkValue = 0;

    const html = document.createElement('div');
    html.classList.add('block', className);

    arr.forEach(function(item) {
        html.innerHTML += `
            <button class="item" value="${item}">${item}</button>
        `;
    });
    html.innerHTML += `<div class="image-div"><img src="refresh.png"></div>`;

    cells.appendChild(html);

    document.querySelector('.image-div img').addEventListener('click', function() {
        printHTML(randValue, className);
    });

    document.querySelector('.block').addEventListener('click', function(e) {
        if (e.target.classList.contains('item')) {
            checkBtn(e.target.value, randValue);
        }
    });
}

function checkBtn(value, randValue) {
    let timer;
    if (value == 1) {
        startTimer();
    }
    if (value - 1 === checkValue) {
        console.log('correct')
        checkValue++;
    } else {
        alert('incorrect!!!!!!!!!!!!!!!');
        checkValue = 0;
    }

    if (value == Math.pow(randValue, 2)) {
        alert('u did it');
    }
}

function startTimer(timer) {
    const min = document.getElementById('min');
    const sec = document.getElementById('sec');
    let s = '00', m = '00';

    setInterval(function() {
        s = +s + 1;
        if (s < 10) { 
            s = '0' + s;
        }
        if (s == 60) {
            s = '00';
            m = +m + 1;
            if (m < 10) { 
                m = '0' + m; 
            }
        }

        sec.innerText = s;
        min.innerText = m;
    }, 1000);
}