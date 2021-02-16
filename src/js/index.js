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
