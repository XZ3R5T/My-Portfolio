particlesJS.load('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
  
particlesJS('particles-js', {
  particles: {
    number: {
      value: 90,
      density: {
        enable: true,
        value_area: 600
      }
    },
    color: {
      value: '#ffffff'
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000000'
      },
      polygon: {
        nb_sides: 5
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 0.4,
      random: true,
      anim: {
        enable: false,
        speed: 5,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#ffffff',
      opacity: 0.6,
      width: 1.4
    },
    move: {
      enable: true,
      speed: 1.2,
      direction: 'none',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  retina_detect: true
});
