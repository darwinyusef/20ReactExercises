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
camera.position.set(5, 5, 10);
camera.lookAt(0, 0, 0);

// OrbitControls para manipular la cámara
const orbitControls = new OrbitControls(camera, renderer.domElement);
orbitControls.enableDamping = true; // Movimiento suave
orbitControls.dampingFactor = 0.05;

// Función de animación
function animate() {
    requestAnimationFrame(animate);
    orbitControls.update(); // Actualiza los controles de cámara
    renderer.render(scene, camera);
}

// Actualizar las transformaciones del modelo desde el formulario
const form = document.getElementById('form-controls');
form.addEventListener('input', (e) => {
    if (model) {
        model.position.set(
            parseFloat(document.getElementById('positionX').value),
            parseFloat(document.getElementById('positionY').value),
            parseFloat(document.getElementById('positionZ').value)
        );

        model.rotation.set(
            parseFloat(document.getElementById('rotationX').value),
            parseFloat(document.getElementById('rotationY').value),
            parseFloat(document.getElementById('rotationZ').value)
        );

        const scaleValue = parseFloat(document.getElementById('scale').value);
        model.scale.set(scaleValue, scaleValue, scaleValue);
    }
});

// Redimensionar pantalla
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
// ejemplo creado por mi
setTimeout(() => {
    model.position.set(0, -3, 3, 0);
    model.rotation.set(0, 1, 0);
    const scaleValue = 0.2;
    model.scale.set(scaleValue, scaleValue, scaleValue);
}, 1000);