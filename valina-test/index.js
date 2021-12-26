document.getElementById('app').innerHTML = `
<h1>Hello Vanilla!</h1>
<button id="btn" onclick="myFunction(event)">like</button>
`

var liked = false

function myFunction(e) {
  console.log(e)
  liked = !liked
  document.getElementById('btn').innerHTML = liked
    ? 'You and your another three friends likes it.'
    : 'like'
}
