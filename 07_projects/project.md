# project related to DOM 

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

#Solution Code

## project 1

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