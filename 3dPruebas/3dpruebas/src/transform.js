import './style.css'
import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.121.1/build/three.module.js";
import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js";
import { TransformControls } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/TransformControls.js"


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
    transformControls.attach(model); // Asocia TransformControls al modelo
    animate();
}, undefined, function (error) {
    console.error('Error al cargar el modelo:', error);
});

// Configuración de la cámara
camera.position.set(5, 5, 10);
camera.lookAt(2, 0, 0);

// OrbitControls para manipular la cámara
const orbitControls = new OrbitControls(camera, renderer.domElement);
orbitControls.enableDamping = true; // Movimiento suave
orbitControls.dampingFactor = 0.05;
orbitControls.maxPolarAngle = Math.PI / 2; // Limitar la rotación vertical

// TransformControls para mover el modelo
const transformControls = new TransformControls(camera, renderer.domElement);
transformControls.setMode('translate'); // Por defecto, permite mover el modelo
scene.add(transformControls);

// Interactividad entre OrbitControls y TransformControls
transformControls.addEventListener('dragging-changed', function (event) {
    orbitControls.enabled = !event.value; // Deshabilita OrbitControls mientras se manipula el modelo
});

// Alternar entre modos (translate, rotate, scale) usando el teclado
window.addEventListener('keydown', function (event) {
    switch (event.key) {
        case 't': // Translate
            transformControls.setMode('translate');
            break;
        case 'r': // Rotate
            transformControls.setMode('rotate');
            break;
        case 's': // Scale
            transformControls.setMode('scale');
            break;
    }
});

// Animación
function animate() {
    requestAnimationFrame(animate);
    orbitControls.update(); // Actualiza los controles de cámara
    renderer.render(scene, camera);
}

// Redimensionar pantalla
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});