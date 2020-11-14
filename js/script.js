
const stepBlocks = document.querySelectorAll('.stepblock')
const stepInfoLast = document.querySelectorAll('.stepinfolast')

stepBlocks.forEach((block, index) => {
  block.addEventListener('mouseover', () => {
    stepInfoLast[index].style.borderBottom = '3px solid white';
  })
  block.addEventListener('mouseout', () => {
    stepInfoLast[index].style.borderBottom = '3px solid black';
  })
})
