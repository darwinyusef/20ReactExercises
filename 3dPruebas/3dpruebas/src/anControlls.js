import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.121.1/build/three.module.js";
import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js";
import { DRACOLoader } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/loaders/DRACOLoader.js";
// ifc
// Configuración de la escena
const container = document.getElementById('container');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

// Luz
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(1, 12, 9);
scene.add(directionalLight);

// Cargar modelo
const loader = new GLTFLoader();
let model;

loader.load("./kira.glb", (gltf) => {
    model = gltf.scene;
    model.scale.set(0.1, 0.1, 0.1);
    scene.add(model);
    animate();
});

// Configuración de la cámara
camera.position.set(0, 1, 5);
console.log(model.rotation);

// Función de animación
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

// Interacción con botones
document.getElementById('rotateButton').addEventListener('click', () => {
    if (model) {
        model.rotation.y += Math.PI / 6; // Rotar 45 grados
    }
});

document.getElementById('scaleUpButton').addEventListener('click', () => {
    if (model) {
        model.scale.multiplyScalar(1.1); // Aumentar tamaño
    }
});

document.getElementById('scaleDownButton').addEventListener('click', () => {
    if (model) {
        model.scale.multiplyScalar(0.9); // Reducir tamaño
    }
});



// Redimensionar pantalla
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});