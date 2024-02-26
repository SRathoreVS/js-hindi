# project related to DOM 

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

#Solution Code

## project 1 (COLOR CHANGE)

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="../styles.css" />
    <title>JavaScript Background Color Switcher</title>
  </head>
  <body>
    <nav>
      <a href="/" aria-current="page">Home</a>
      <a target="_blank" href="https://www.youtube.com/@chaiaurcode"
        >Youtube channel</a
      >
    </nav>
    <div class="canvas">
      <!-- <a
        style="
          background-color: #fff;
          padding: 10px 30px;
          border-radius: 8px;
          color: #212121;
          text-decoration: none;
          border: 2px solid #212121;
        "
        href="../index.html"
        >Back to Home Page</a
      > -->
      <h1>Color Scheme Switcher</h1>
      <span class="button" id="grey"></span>
      <span class="button" id="white"></span>
      <span class="button" id="blue"></span>
      <span class="button" id="yellow"></span>
      <h2>
        Try clicking on one of the colors above
        <span>to change the background color of this page!</span>
      </h2>
    </div>
    <script src="project.js"></script>
  </body>
</html>



```


```javascript
const buttons = document.querySelectorAll('.button')
document.querySelector("body")

buttons.forEach( (button) => {
  console.log(button); 
  button.addEventListener('click', (event)=>{
  console.log(event);
  console.log(event.target); // we get from where event is coming along
  if (event.target.id === 'grey') {
    body.style.backgroundColor = event.target.id // 'grey'
  }
  if (event.target.id === 'white') {
    body.style.backgroundColor = event.target.id // 'grey'
  }
  if (event.target.id === 'blue') {
    body.style.backgroundColor = event.target.id // 'grey'
  }
  if (event.target.id === 'yellow') {
    body.style.backgroundColor = event.target.id // 'grey'
  }
  if (event.target.id === 'purple') {
    body.style.backgroundColor = event.target.id // 'grey'
  }
  }) 
})

// EVENT HAPPENS , so we add what event we want it to happen , and so if we call some event like hover , click etc ,so we need something who will listen to those event ,as in event Listener 

```
-------------------------------------------------------------------------
## project 2 (BMI CALCULATOR)

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="../styles.css" />
    <title>BMI Calculator</title>
  </head>
  <body>
    <nav>
      <a href="/" aria-current="page">Home</a>
      <a target="_blank" href="https://www.youtube.com/@chaiaurcode"
        >Youtube channel</a
      >
    </nav>
    <div class="container">
      <h1>BMI Calculator</h1>
      <form>
        <p><label>Height in CM: </label><input type="text" id="height" /></p>
        <p><label>Weight in KG: </label><input type="text" id="weight" /></p>
        <button>Calculate</button>
        <div id="results"></div>
        <div id="weight-guide">
          <h3>BMI Weight Guide</h3>
          <p>Under Weight = Less than 18.6</p>
          <p>Normal Range = 18.6 and 24.9</p>
          <p>Overweight = Greater than 24.9</p>
        </div>
      </form>
    </div>
  </body>
  <script src="project.js"></script>
</html>


```
```javascript

// form has SUBMIT event not a CLICK event

const form = document.querySelector('form');
// this usecase will give you empty
//const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', (e) => {
  e.preventDefault(); // used to revoke the current default action in form
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the results
    results.innerHTML = `<span>${bmi}
    ${bmi < 18.6 ? "under weight" : (bmi>18.6 && bmi<24.9 ? "Normal range" :
    "Overweight")}</span>`;
  }
});

```
-------------------------------------------------------------------------

# Project 3 (DIGITAL CLOCK)

```HTML

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" type="text/css" href="../styles.css" />
    <title>Your Local Time</title>
    <style>
      body {
        background-color: #212121;
        color: #fff;
      }
      .center {
        display: flex;
        height: 100vh;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      #clock {
        font-size: 40px;
        background-color: orange;
        padding: 20px 50px;
        margin-top: 10px;
        border-radius: 10px;
      }
    </style>
  </head>
  <body>
    <nav>
      <a href="/" aria-current="page">Home</a>
      <a target="_blank" href="https://www.youtube.com/@chaiaurcode"
        >Youtube channel</a
      >
    </nav>
    <div class="center">
      <div id="banner"><span>Your local time</span></div>
      <div id="clock"></div>
    </div>
    <script src="project.js"></script>
  </body>
</html>

```

```javascript

const clock = document.getElementById('clock');
//const clock = document.querySelector('#clock)

setInterval(() => {
  let date = new Date();
  //console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

// any method , and tell the interval till what time it will call the method
//setInterval(function(){},time(s))

```
-------------------------------------------------------------------------

# Project 04 (GUESS THE NUMBER)

```HTML


```