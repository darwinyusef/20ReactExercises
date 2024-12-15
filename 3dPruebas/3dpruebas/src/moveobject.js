import './style.css'
import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.121.1/build/three.module.js";
import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/loaders/GLTFLoader.js";

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


// Variables para el movimiento
let scrollPosition = 0; // Para almacenar la posición del scroll

// Función de animación que se actualiza con el scroll
function animate() {
    requestAnimationFrame(animate);

    // Calculamos el progreso basado en la posición del scroll
    let progress = scrollPosition / window.innerHeight; // El scroll va de 0 a 1 (100% de la altura de la ventana)

    // Limitar el progreso para que no se salga de los rangos (de 0 a 1)
    progress = Math.min(Math.max(progress, 0), 1);

    // Interpolamos entre la posición A y B
    const startPosition = { x: 7, y: -3, z: 5 };
    const endPosition = { x: 3, y: -0.4, z: 0 }; // Mover el modelo de A a B en X

    model.position.x = startPosition.x + (endPosition.x - startPosition.x) * progress;
    model.position.y = startPosition.y + (endPosition.y - startPosition.y) * progress;
    model.position.z = startPosition.z + (endPosition.z - startPosition.z) * progress;
    model.rotation.y = 8 * progress;
    // Escalar el modelo a medida que se mueve
    const scaleValue = 0.1 + progress * 0.1; // El modelo aumenta su tamaño conforme se mueve
    model.scale.set(scaleValue, scaleValue, scaleValue);

    // Renderizamos la escena
    renderer.render(scene, camera);
}

// Detectar el scroll y actualizar la posición
window.addEventListener('scroll', () => {
    scrollPosition = window.scrollY; // Guardar la posición del scroll
});

// Redimensionar pantalla
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
