import './style.css'
import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.121.1/build/three.module.js";
import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js";


// Configuración básica de Three.js
const container = document.getElementById('container');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

// Luz ambiental y direccional
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Luz ambiental tenue
const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // Luz direccional
directionalLight.position.set(5, 10, 7.5);
scene.add(ambientLight, directionalLight);

// Cargar modelo GLTF
const loader = new GLTFLoader();
let model;
loader.load('./elf_girl.glb', function (gltf) {
    model = gltf.scene;
    model.scale.set(0.1, 0.1, 0.1); // Ajusta la escala según sea necesario
    scene.add(model);
    animate();
}, undefined, function (error) {
    console.error('Error al cargar el modelo:', error);
});

// Configuración de la cámara
camera.position.set(5, 1, 10);
camera.lookAt(0, 0, 0);

// OrbitControls para manipular la cámara
const orbitControls = new OrbitControls(camera, renderer.domElement);
orbitControls.enableDamping = true; // Movimiento suave
orbitControls.dampingFactor = 0.05;

// Animación: mover el modelo de centro a izquierda y aumentar su tamaño
let progress = 0;
const duration = 2; // Duración de la animación (en segundos)
const startPosition = { x: -0.1, y: -0.8, z: 0 };
const endPosition = { x: 0, y: -0.4, z: 0 };  // Destino (izquierda)

function animate() {
    requestAnimationFrame(animate);

    // Calculamos el progreso de la animación
    progress += 1 / (duration * 60); // 60 FPS, por lo que cada frame aumenta un poco el progreso
    if (progress > 1) progress = 1; // Limitar el progreso al 100%

    // Interpolamos entre la posición A y B
    model.position.x = startPosition.x + (endPosition.x - startPosition.x) * progress;
    model.position.y = startPosition.y + (endPosition.y - startPosition.y) * progress;
    model.position.z = startPosition.z + (endPosition.z - startPosition.z) * progress;

    // Escalar el modelo a medida que se mueve hacia la izquierda
    const scaleValue = 0.1 + progress * 0.1; // El modelo aumenta su tamaño conforme se mueve
    console.log(scaleValue);
    model.scale.set(scaleValue, scaleValue, scaleValue);

    // Actualizamos los controles de la cámara
    orbitControls.update();
    renderer.render(scene, camera);
}

// Redimensionar pantalla
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});