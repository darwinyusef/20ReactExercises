import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.121.1/build/three.module.js";
import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/loaders/DRACOLoader.js";

// Configuración de la escena
const container = document.getElementById('tresD');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

// Luz
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(0, 0, 0);

scene.add(directionalLight);

// Configuración del GLTFLoader con DRACOLoader
const loader = new GLTFLoader();
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('./draco-main/javascript/'); // Ruta del decodificador Draco
loader.setDRACOLoader(dracoLoader);

let model;

// Cargar modelo GLTF comprimido con Draco
loader.load('./emblem.glb', (gltf) => {
    model = gltf.scene;
    model.scale.set(1.5, 1.5, 1.5);
    scene.add(model);

    animate();
}, undefined, (error) => {
    console.error('Error al cargar el modelo:', error);
});



// Configuración de la cámara
camera.position.set(-1, 1, 4);

let rotation = 0; // Variable para la rotación basada en el scroll
let progress = 0; // Progreso para la interpolación de la animación
let times = 0;
const duration = 2; // Duración de la animación
const startRotationY = 0; // Rotación inicial
const endRotationY = Math.PI * 2; // Rotación final (360 grados)

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    rotation = scrollY * 0.001;
    if (scrollY == 0) {
        if (times < 2) {
            progress = 0;
        }
        times++
    }
});


// Función de animación
function animate() {
    requestAnimationFrame(animate);
    

    // Lógica para el progreso de la animación
    if (times == 0) {
        progress += 1 / (duration * 80); // 80 FPS, por lo que cada frame aumenta un poco el progreso
    } else if (times == 1) {
        progress += 1 / (duration * 40); // 80 FPS, en el second time por lo que cada frame aumenta un poco el progreso
    } else {
        progress += 1 / (duration * 10); // 80 FPS, apartir del second time todos los demas por lo que cada frame aumenta un poco el progreso
    }
    // Limit
    if (progress > 1) {
        progress = 1;
    }

    // Interpolación suave de la rotación en Y
    const interpolatedRotationY = startRotationY + (endRotationY - startRotationY) * progress;

    // Modificar la rotación del modelo basada en el scroll
    if (model) {
        model.rotation.y = interpolatedRotationY + rotation; // Añadir la rotación del scroll a la interpolación
    }

    renderer.render(scene, camera);
}


document.getElementById('scaleUpButton').addEventListener('click', () => {
    if (model) {
        if (model.scale.z < 1.3310000000000004) {
            model.scale.multiplyScalar(1.1); // Aumentar tamaño
        }
    }
});

document.getElementById('scaleDownButton').addEventListener('click', () => {
    if (model) {
        if (model.scale.z > 0.5904900000000002) {
            model.scale.multiplyScalar(0.9); // Reducir tamaño
        }
    }
});

document.getElementById('reset').addEventListener('click', () => {
    if (model) model.scale.set(1, 1, 1); // Reset
});

document.getElementById('reset').addEventListener('click', () => {
    if (model) {
        model.scale.multiplyScalar(1);
        model.rotation.y = 0;
        animate() // Iniciar la animación
    }
});

// Redimensionar pantalla
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});