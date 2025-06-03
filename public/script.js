const container = document.getElementById('canvas-container');

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

// add lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(5, 10, 7.5);
scene.add(directionalLight);

// base of the building
const baseGeometry = new THREE.CylinderGeometry(4, 4, 2, 32);
const baseMaterial = new THREE.MeshPhongMaterial({ color: 0xd4af37 });
const base = new THREE.Mesh(baseGeometry, baseMaterial);
scene.add(base);

// dome on top
const domeGeometry = new THREE.SphereGeometry(3, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2);
const domeMaterial = new THREE.MeshPhongMaterial({ color: 0xffd700 });
const dome = new THREE.Mesh(domeGeometry, domeMaterial);
dome.position.y = 1;
scene.add(dome);

camera.position.z = 10;

function animate() {
    requestAnimationFrame(animate);
    base.rotation.y += 0.005;
    dome.rotation.y += 0.005;
    renderer.render(scene, camera);
}

animate();

