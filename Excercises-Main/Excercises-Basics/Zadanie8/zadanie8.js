// variable declaration
const output = document.querySelector('.output');
const h1 = document.querySelector('h1');
document.body.addEventListener('mousemove', (e) => {
  // declaration of position x and y
  const x = e.clientX + 1; // plus 1 because we count it from 0
  const y = e.clientY + 1;
  // New variables needed to calculate mor precisely the colors value because as weknow the rgb color has the value  equal to 100% on the edges
  // We can use window Height abd Width  by declaring variables becuse it will be easier to use it with ccalculation
  const width = window.innerWidth;
  const height = window.innerHeight;
  // texts display
  h1.style.display = 'none';
  // as we know if we will use textContent than all the letters will be displayed, for inner HTML we will have to use <br> tags to display the values one under the the ssecond or an block tags as divs and for inner text it is enougt to use '\n' mar to spread the values we want in separate lines.
  output.innerText = `Position on axis: \n  x: ${x - 1} \n and \n y: ${y - 1} `;



  // dedlaration of how to change colors depended of pointer position
  const red = x / width * 100; //100 % on the right edge
  const green = y / height * 100; //100%
  const blue = ((x / width * 100) + (y / height * 100)) / 2; //100%

  // as the linear parameter declaration what will be changed depended of mouse position and the color is in percents displayed because can be :)
  document.body.style.backgroundColor = `rgb(${red}%, ${green}%, ${blue}%)`


})