import './style.css'
import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.121.1/build/three.module.js";
import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three-orbitcontrols@2.110.3/OrbitControls.min.js";

const container = document.getElementById('container');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
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
camera.position.z = 10;

// Rotación basada en el scroll
let rotation = 0;
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  rotation = scrollY * 0.01; // Ajusta la sensibilidad aquí
});

// Animación
function animate() {
  requestAnimationFrame(animate);

  if (model) {
    model.rotation.y = rotation; // Rotación en el eje Y
  }

  renderer.render(scene, camera);
}

// Redimensionar pantalla
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

animate()

