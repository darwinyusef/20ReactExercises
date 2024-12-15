
import './style.css'
import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.121.1/build/three.module.js";
import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js";
import { TransformControls } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/TransformControls.js"

// Escena, cámara y renderizador
const container = document.getElementById('container');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

// Luz
const light = new THREE.AmbientLight(0xffffff, 1); // Luz ambiental
scene.add(light);

// Cargar modelo .glb
const loader = new GLTFLoader();
let model;
loader.load('elf_girl.glb', function (gltf) {
    model = gltf.scene;
    model.scale.set(0.1, 0.1, 0.1); // Escala del modelo
    scene.add(model);
    animate();
}, undefined, function (error) {
    console.error(error);
});

// Configuración inicial
camera.position.z = 7;

// Controladores de órbita (OrbitControls)
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Suavizar el movimiento
controls.dampingFactor = 0.1;
controls.screenSpacePanning = true; // Deshabilitar paneo
controls.maxPolarAngle = Math.PI / 2; // Limitar la rotación vertical

// Animación
function animate() {
    requestAnimationFrame(animate);

    controls.update(); // Actualiza los controles en cada frame
    renderer.render(scene, camera);
}

// Redimensionar pantalla
// window.addEventListener('resize', () => {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(window.innerWidth, window.innerHeight);
// });

