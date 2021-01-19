//mostrar barra de navegacion movil
let bars = document.getElementById('bars');
let barra = document.getElementById('mostrar');
let activador = true;

bars.addEventListener('click', () => {

	if (activador === true) {
		barra.style.left = '0%';
		barra.style.transition = '1s';

		activador = false;
	} else {
		barra.style.left = '-100%';

		activador = true;
	}
})
//mostrar barra de navegacion movil fin

//click en barra de navegacion start
let navBar = document.getElementsByClassName('nav-item');

function hola(e){

for (var i = 0; i < navBar.length; i++) {
	let data = navBar[i];

	if (data) {
		data.classList.remove('active');
		e.target.classList.add('active')
	}
}

}

mostrar.addEventListener('click', (e) => {

	hola(e)
})
//click en barra de navegacion fin

//ventana modal siguiente y atras start--------------

let atras=document.getElementById('atras');
let siguiente=document.getElementById('siguiente');

let contenedor=document.getElementById('campos')

siguiente.addEventListener('click',()=>{

	contenedor.scrollLeft += contenedor.offsetWidth + 20;
	
})

atras.addEventListener('click',()=>{

	contenedor.scrollLeft -= contenedor.offsetWidth + 20;
	
})

//ventana modal siguiente y atras end--------------


//ventana modal abrir y cerrar

let perfilOn=document.getElementById('perfil');
let perfilOff=document.getElementById('close');

let ventana=document.getElementById('ventana');

perfilOn.addEventListener('click',()=>{

	ventana.style.top = '0px';
})
perfilOff.addEventListener('click',()=>{

	ventana.style.top = '-100%';
})
//ventana modal abrir y cerrar


//barra de navegacion pegajosa-------------------------
let contenedorNav=document.getElementById('nav-container')
let scrollAfter=window.pageYOffset;

window.addEventListener('scroll',()=>{

let scrollBefore=window.pageYOffset;
if (scrollAfter < scrollBefore) {
	contenedorNav.style.top = '0';
	contenedorNav.style.transition = '1s';


	scrollAfter=scrollBefore;
}else{
	contenedorNav.style.top = '-100px';
	contenedorNav.style.transition = '1s';

	scrollAfter=scrollBefore;
}
if (scrollBefore == 0 || scrollBefore == 74 ) {
	contenedorNav.style.top = '0';
}
})

//barra de navegacion pegajosa end-------------------------


//parte de conociminetos-------------------------

let css=document.getElementById('boton-css');
let js=document.getElementById('boton-js');
let parteCss=document.getElementById('parte-css');
let parteJs=document.getElementById('parte-js');

css.addEventListener('mouseenter',()=>{
	parteCss.style.visibility = 'visible';
	parteCss.style.transition = '1s'
})
css.addEventListener('mouseleave',()=>{
	parteCss.style.visibility = 'hidden';
	parteCss.style.transition = '1s'
})

js.addEventListener('mouseenter',()=>{
	parteJs.style.visibility = 'visible';
	parteJs.style.transition = '1s'
})
js.addEventListener('mouseleave',()=>{
	parteJs.style.visibility = 'hidden';
	parteJs.style.transition = '1s'
})


let activar=true;
css.addEventListener('mousedown',()=>{
	if (activar) {
	parteCss.style.visibility = 'visible';
	activar=false
}else{
	parteCss.style.visibility = 'hidden';
	activar=true;
}
})
let active=true;
js.addEventListener('mousedown',()=>{
	if (active) {
	parteJs.style.visibility = 'visible';
	active=false;
}else {
	parteJs.style.visibility = 'hidden';
	active=true;
}
})
