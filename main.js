window.addEventListener('scroll', onScroll);

onScroll();
function onScroll() {

  showNavOnScroll();
  showBackToTopButtonOnScroll();

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(contact)


}

function activateMenuAtCurrentSection(section){
  const targetLine = scrollY + innerHeight/2;

  //verificar se a seção passou da linha
  //quais dados vou precisar?
  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;

  const sectionTopReachedOrPassedTargetLine = targetLine >= sectionTop;

  console.log('O topo da  seção chegou ou passou?', sectionTopReachedOrPassedTargetLine);

  //verificar se a base estar abaixo de targetLine
  //quais dados vou precisar?
  //a seção termina onde?
  const sectionEndsAt = sectionTop + sectionHeight;

  //o final da seção passou da linha alvo
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine 
  console.log('O final da seção passou da linha alvo? ', sectionEndPassedTargetLine)

  //limites da seção
  const sectionBoundaries = 
  sectionTopReachedOrPassedTargetLine &&
  !sectionEndPassedTargetLine;
  


  const sectionId = section.getAttribute('id');
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);


 
  menuElement.classList.remove('active') 
  if(sectionBoundaries){
    menuElement.classList.add('active');
  } 


}






function showNavOnScroll(){
  let takeField = document.getElementById('nav')
  
  if (scrollY > 0) {
    takeField.classList.add('scroll')
  } else {
    takeField.classList.remove('scroll')
  }
  
}

function showBackToTopButtonOnScroll(){
  if(scrollY > 550){
    backToTopButton.classList.add('show');
  }else{
    backToTopButton.classList.remove('show');
  }
}

function openMenu() {
  document.body.classList.add('menu_expanded')
}

function closeMenu() {
  document.body.classList.remove('menu_expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
#home, 
#home img,
#home .stats,
#services,
#services header,
#services .card, 
#contact, 
#contact header,
#contact .content`)
