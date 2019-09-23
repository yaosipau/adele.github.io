$('.menu-btn').on('click', function(e) {
	e.preventDefault;
	$(this).toggleClass('menu-btn_active');
	$('.menu-nav').toggleClass('menu-nav_active');
});
$(document).ready(function(){
    $('.results-wrapper').slick({
    dots: true,
    infinite: true,
    speed: 500,
    cssEase: 'linear',
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true
  });
});
$(document).ready(function(){
    $('.testimonials-wrapper').slick({
    dots: true,
    infinite: true,
    speed: 500,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
  });
});

var ingredient = {name:'ingredient', mass:0, description: 'this is ingredient'}
var suppList = new Vue({
    el: '#supplement',
    data: {
        products: [
            { id: '0', name: 'Citrus Aurantium', mg: 100, description: 'text about Citrus Aurantium' },
            { id: '1', name: 'Green Coffee Extract', mg: 72, description: 'text about Green Coffee Extract' },
            { id: '2', name: 'Green Tea Extract', mg: 88, description: 'text about Green Tea Extract' },
            { id: '3', name: 'Guarana Extract w/ 10% Caffeine', mg: 4, description: 'text about Guarana Extract w/ 10% Caffeine' },
            { id: '4', name: 'L-Phenylalanine', mg: 67, description: 'text about L-Phenylalanine' },
            { id: '5', name: 'Niacin', mg: 87, description: 'text about Niacin' },
            { id: '6', name: 'Red Pepper Extract', mg: 323, description: 'text about Red Pepper Extract' },
            { id: '7', name: 'Vitamin B6', mg: 8, description: 'text about Vitamin B6' }        
        ],
        ingredient           
    },
    methods: { 
        func: function (e) {
            ingredient.name=this.products[e.target.id].name;
            ingredient.mass=this.products[e.target.id].mg;
            ingredient.description=this.products[e.target.id].description;            
            // console.log(this.products[e.target.id].id+' '+this.products[e.target.id].name+' '+this.products[e.target.id].mg);           
        }       
    }    
})
