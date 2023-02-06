let touchstartX = 0
let touchendX = 0
    
function checkDirection() {
  if (touchendX < touchstartX) alert('swiped left!')
  if (touchendX > touchstartX) alert('swiped right!')
}

document.getElementById("test").addEventListener('touchstart', e => {
    alert("s")
  touchstartX = e.changedTouches[0].screenX
})

document.getElementById("test").addEventListener('touchend', e => {
  touchendX = e.changedTouches[0].screenX
  checkDirection()
})


document.getElementById("test").addEventListener('touchstart', (event) => {alert("ff")});