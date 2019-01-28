import * as THREE from 'three';
import GLTFLoader from 'three-gltf-loader'

var clockLoader = new GLTFLoader()
var clockComponent

clockLoader.load('models/clock.glb', function (gltf) {
  var clock;
  clock = gltf.scene;
  gltf.scene.scale.set(0.44, 0.44, 0.44);
  gltf.scene.position.x = 0.49;				    //Position (x = right+ left-)
  gltf.scene.position.y = -0.3;				    //Position (y = up+, down-)
  gltf.scene.position.z = -0.47;				    //Position (z = front +, back-)
  gltf.scene.rotation.z = Math.PI / 2;
  gltf.scene.rotation.y = - Math.PI / 2;
  var material = new THREE.MeshPhongMaterial({
    color: 0x999999,
    shininess: 100,
  });
  var material2 = new THREE.MeshPhongMaterial({
    color: 0x222222,
    shininess: 10,
  });
  clock.traverse((o) => {
    if (o.isMesh) {
      if (o.name === 'Cube001') o.material = material2;
      else o.material = material;
    }
  });

  clock.castShadow = true;
  clock.receiveShadow = true;
  clockComponent = clock
})



// import * as THREE from 'three';

var time = 300
var counter = 0

function timeIt() {

  counter++
  var timeLeft = time - counter

  var min = Math.floor(timeLeft / 60)
  var sec = Math.floor(timeLeft % 60)

  // console.log(min + ':' + sec)
  const str = (min + ':' + sec).toString()
  // console.log('str', str)
  console.log(str)
  return str
}
setInterval(timeIt, 1000)

console.log('hi')

export default clockComponent