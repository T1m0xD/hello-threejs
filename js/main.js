const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.OctahedronGeometry(10, 0);
const material = new THREE.MeshStandardMaterial({ color: 0x970117});
const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);
scene.add( light );

light.position.set( 0, 10, 0 );
camera.position.z = 35;

function animate() {
    requestAnimationFrame(animate);

    torus.rotation.x += 0.02;
    torus.rotation.y += 0.03;

    renderer.render(scene, camera);
};

animate();