window.addEventListener('scroll', onScroll)

onScroll()

function showNavOnScroll() {
  if (scrollY == 0) {
    navigation.classList.remove('scroll')
  } else {
    navigation.classList.add('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY <= 400) {
    backToTopButton.classList.remove('show')
  } else {
    backToTopButton.classList.add('show')
  }
}

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
}

function activateMenuAtCurrentSection(section) {
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  const targetLine = scrollY + innerHeight / 2
  const sectionEndsAt = sectionTop + sectionHeight
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine
  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  if (sectionBoundaries) {
    menuElement.classList.add('active')
  } else {
    menuElement.classList.remove('active')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: '700'
}).reveal(`#home, 
#home img, 
#home .stats, 
#services,
#services header,
#services .card,
#about,
#about header,
#about .content p,
#about .content img`)
