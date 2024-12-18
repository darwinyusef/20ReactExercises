import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.121.1/build/three.module.js";
import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/loaders/GLTFLoader.js";
// import Stats from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/libs/stats.module.js";
// import { GUI } from "https://cdn.jsdelivr.net/npm/lil-gui@0.16.0/+esm";


let anim, clock, gui, mixer, actions, activeAction, previousAction;
let camera, scene, renderer, model, hemiLight, dirLight;
let rotation = 0; // Variable para rotación basada en el scroll
const api = { state: 'Walking' };

init();

function init() {
    const container = document.getElementById('container');
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.25, 100);
    camera.position.set(-5, 3, 10);
    camera.lookAt(0, 2, 0);

    // Escena
    scene = new THREE.Scene();
    // scene.background = new THREE.Color(0x000000);
    // scene.fog = new THREE.Fog(0x000000, 20, 100);

    clock = new THREE.Clock();

    // Luces
    hemiLight = new THREE.HemisphereLight(0xffffff, 0x8d8d8d, 1.4);
    hemiLight.position.set(0, 40, 0);
    scene.add(hemiLight);

    dirLight = new THREE.DirectionalLight(0xffffff, 4);
    dirLight.position.set(0, 40, 0);
    scene.add(dirLight);

    // Suelo
    // const mesh = new THREE.Mesh(
    //     new THREE.PlaneGeometry(1000, 2000),
    //     new THREE.MeshPhongMaterial({ color: 0xcbcbcb, depthWrite: false })
    // );
    // mesh.rotation.x = -Math.PI / 2;
    //scene.add(mesh);

    // const grid = new THREE.GridHelper(200, 40, 0x000000, 0x000000);
    // grid.material.opacity = 0.2;
    // grid.material.transparent = true;
    // scene.add(grid);

    // Cargar modelo con animaciones
    const loader = new GLTFLoader();
    loader.load('./models/RobotExpressive.glb', function (gltf) {
        model = gltf.scene;
        anim = gltf.animations;

        model.scale.set(1.5, 1.5, 1.5);
        model.position.set(5, -1, 0);
        scene.add(model);
        createGUI(model, anim);
    }, undefined, function (error) {
        console.error(error);
    });

    // Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setAnimationLoop(animate);
    container.appendChild(renderer.domElement);

    // Eventos
    window.addEventListener('resize', onWindowResize);
    window.addEventListener('scroll', onScroll);

    // Estadísticas
    // stats = new Stats();
    // container.appendChild(stats.dom);
}


function createGUI(model, animations) {
    const states = ['Idle', 'Walking', 'Running', 'Dance', 'Death', 'Sitting', 'Standing'];
    const emotes = ['Jump', 'Yes', 'No', 'Wave', 'Punch', 'ThumbsUp'];
    mixer = new THREE.AnimationMixer(model);

    // gui = new GUI();
    actions = {};
    for (let i = 0; i < animations.length; i++) {
        const clip = animations[i];
        const action = mixer.clipAction(clip);
        actions[clip.name] = action;
        if (emotes.includes(clip.name) || states.indexOf(clip.name) >= 4) {
            action.clampWhenFinished = true;
            action.loop = THREE.LoopOnce;
        }
    }

    // Estados
    /* const statesFolder = gui.addFolder('States');
    const clipCtrl = statesFolder.add(api, 'state').options(states);
    clipCtrl.onChange(() => fadeToAction(api.state, 0.5));
    statesFolder.open(); */

    // Emotes
    /* const emoteFolder = gui.addFolder('Emotes');
    for (let emote of emotes) {
        api[emote] = function () {
            fadeToAction(emote, 0.2);
            mixer.addEventListener('finished', restoreState);
        };
        emoteFolder.add(api, emote);
    }

    emoteFolder.open(); */

    activeAction = actions[api.state];
    activeAction.play();
}

function activationAnim(action) {
    if (model) {
        const emotes = ['Jump', 'Yes', 'No', 'Wave', 'Punch', 'ThumbsUp'];
        let final = 0.5;
        if (emotes.includes(action)) {
            final = 0.2;
        }
        fadeToAction(action, final);
        mixer.addEventListener('finished', restoreState);

    }
}

document.getElementById('ia1').addEventListener('mouseenter', (e) => {
    e.preventDefault();
    activationAnim('Yes');
});


const controls = document.getElementById('controls')
if (controls) {
    // Agregar un evento de clic al contenedor
    controls.addEventListener('click', (e) => {
        // Verificar que el objetivo del clic es un botón con un atributo data-action
        if (e.target && e.target.dataset.action) {
            // Obtener el valor de data-action
            const action = e.target.dataset.action;
            activationAnim(action)
        }
    });
} else {
    console.log('No se encontró el contenedor de controles.');
}

function fadeToAction(name, duration) {
    console.log(name, duration);
    previousAction = activeAction;
    activeAction = actions[name];

    if (previousAction !== activeAction) {
        previousAction.fadeOut(duration);
    }

    activeAction.reset().setEffectiveTimeScale(1).setEffectiveWeight(1).fadeIn(duration).play();
}

function restoreState() {
    mixer.removeEventListener('finished', restoreState);
    fadeToAction(api.state, 0.2);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function onScroll() {
    // Rotación y escala basadas en el scroll
    const scrollY = window.scrollY;
    rotation = scrollY * 0.02;
    hemiLight.intensity = 1.4 + scrollY * 0.1;
    dirLight.intensity = 4 + scrollY * 0.1;
    document.getElementById('container').style.filter = `blur(${0 + scrollY * 0.5}px)`;
    document.getElementById('ia1').style.filter = `blur(${0 + scrollY * 0.5}px)`;
    if (model) {
        model.rotation.y = rotation;
        model.scale.set(1.4 + rotation, 1.4 + rotation, 1.4 + rotation);
    }
}

function animate() {
    const dt = clock.getDelta();
    if (mixer) mixer.update(dt);
    renderer.render(scene, camera);
    // stats.update();
}

// Redimensionar pantalla
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
