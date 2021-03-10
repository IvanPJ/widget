const card = document.querySelector('.card');
const container = document.querySelector('.container');
const image = document.querySelector('.image img');

container.addEventListener('mousemove', (e) => {
 let xAxis = (window.innerHeight / 2 - e.pageY) / 25;
 let yAxis = (window.innerWidth / 2 - e.pageX) / -25;

 card.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`;
});

container.addEventListener('mouseenter', (e) => {
  card.style.transition = 'none';
  card.style.transition = 'all 0.1s ease';

  image.style.transform = 'translateZ(100px)';
  image.style.transform = 'box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2), 0 15px 50px rgba(0, 0, 0, 0.2)';

});

container.addEventListener('mouseleave', (e) => {
  card.style.transition = 'all 0.6s ease';
  card.style.transform = `rotateY(0deg) rotateX(0deg)`

  image.style.transform = 'translateZ(0px)';
});