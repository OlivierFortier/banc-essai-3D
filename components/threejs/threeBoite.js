import * as THREE from 'three';

// on déclare les variables à utiliser
let camera, scene, renderer;
let geometry, material, mesh;

// style de programmation procédural, ligne par ligne, instruction par instruction
export function init() {

	// on créer un objet de caméra, en spécifiant ses paramètres
	camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
	camera.position.z = 1;

	// on initialise une scène 3D
	scene = new THREE.Scene();

	// pour créer une forme, on doit avoir plusieurs choses.
	// un mesh, qui englobe une géométrie et un material

	// la géométrie définit la forme de l'objet
	geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );

	// le matériel définit l'aspect de l'objet (en d'autres mots, son apparence, sa texture, sa surface)
	material = new THREE.MeshNormalMaterial();

	// il faut construire la forme en passant en paramètres au mesh la géométrie et le material
	mesh = new THREE.Mesh( geometry, material );

	// ensuite il faut ajouter à la scène le mesh
	scene.add( mesh );

	// pour qu'une scène soit visible, il faut créer un moteur de rendu. Il y en a plusieurs, par exemple pour CSS, 
	// mais pour nos besoins, on utilise un canvas webgl
	renderer = new THREE.WebGLRenderer( { antialias: true } );

	// il faut bien sur spécifier ses attributs par des fonctions et des paramètres
	renderer.setSize( window.innerWidth, window.innerHeight );

	// pour créer des animations, il faut préparer le moteur de rendu à cet effet, et spécifier les animations en paramètres
	renderer.setAnimationLoop( animation );

	// ensuite, il faut bien sur ajouter la scène à un élément du DOM
	document.getElementById("scene").appendChild( renderer.domElement );

}

// animation du cube
function animation( time ) {

	// on fait une rotation du cube tout simplement selon le temps écoulé
	mesh.rotation.x = time / 2000;
	mesh.rotation.y = time / 1000;

	// on doit spécifier à Three.js d'effectuer un nouveau rendu à chaque frame, pour créer l'effet d'animation
	renderer.render( scene, camera );

}