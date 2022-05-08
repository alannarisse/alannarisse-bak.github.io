$(function () {
  // Handler for .ready() called.

  function showNav() {
    $('#topnav').html(
      `
	<ul>
		<li class="resources-link"><a href="resources.html">resources</a></li>
		<li class="favorite-foods-link"><a href="favorite-foods.html">Favorite Foods</a></li>
		<li class="apple-link"><a href="#">Apple</a></li>
	</ul>
	`
    )
  }

  function addActiveClass() {
    if ($('body.favorite-foods')) {
      $('.favorite-foods-link').addClass('active')
    } else if ($('body.resources')) {
      $('.resources-link').addClass('active')
    }
  }

  function initialize() {
    showNav()
    addActiveClass()
  }

  $(initialize())
})

particlesJS('particles-js', { particles: { number: { value: 80, density: { enable: true, value_area: 800 } }, color: { value: '#1b0101' }, shape: { type: 'triangle', stroke: { width: 0, color: '#000000' }, polygon: { nb_sides: 5 }, image: { src: 'img/github.svg', width: 100, height: 100 } }, opacity: { value: 0.12025590456491421, random: false, anim: { enable: false, speed: 2.4362316369040355, opacity_min: 0.11369080972218831, sync: false } }, size: { value: 149.93805191013183, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } }, line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.8498083922587271, width: 4.649894976510016 }, move: { enable: true, speed: 6, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false, attract: { enable: false, rotateX: 600, rotateY: 1200 } } }, interactivity: { detect_on: 'canvas', events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: true, mode: 'push' }, resize: true }, modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } } }, retina_detect: true })
var count_particles, stats, update
stats = new Stats()
stats.setMode(0)
stats.domElement.style.position = 'absolute'
stats.domElement.style.left = '0px'
stats.domElement.style.top = '0px'
document.body.appendChild(stats.domElement)
count_particles = document.querySelector('.js-count-particles')
update = function () {
  stats.begin()
  stats.end()
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length
  }
  requestAnimationFrame(update)
}
requestAnimationFrame(update)
