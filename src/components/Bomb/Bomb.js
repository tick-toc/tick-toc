import React, { Component } from 'react';
import * as THREE from 'three';
import GLTFLoader from 'three-gltf-loader'
import { wireCountCases, wireCount } from './SubjectOfWires/SubjectOfWires'
import { generateRandom } from '../../util'

class Bomb extends Component {
  constructor(props) {
    super(props)
    this.canvasRef = React.createRef()
    this.state = {
      moduleOne: {
        inactive: true,
        active: false,
        pass: false,
        fail: false
      },
      moduleTwo: {
        inactive: true,
        active: false,
        pass: false,
        fail: false
      },
      moduleThree: {
        inactive: true,
        active: false,
        pass: false,
        fail: false
      },
      moduleFour: {
        inactive: true,
        active: false,
        pass: false,
        fail: false
      },
      moduleFive: {
        inactive: true,
        active: false,
        pass: false,
        fail: false
      },

      timer: 300000,
      strikesAllowed: 3,
      strikeCount: 0

    }

  }

  componentDidMount() {

    var camera, scene, renderer, box, clock, mo1;
    var targetList = [];
    var projector, mouse = { x: 0, y: 0 };


    init();
    animate();

    function init() {

      camera = new THREE.PerspectiveCamera(36, window.innerWidth / window.innerHeight, 0.25, 16);

      camera.position.set(0, 1.8, 4);

      scene = new THREE.Scene();

      // Lights

      scene.add(new THREE.AmbientLight(0x505050));

      let spotLight = new THREE.SpotLight(0xffffff);
      spotLight.angle = Math.PI / 5;
      spotLight.penumbra = 0.2;
      spotLight.position.set(2, 3, 3);
      spotLight.castShadow = true;
      spotLight.shadow.camera.near = 3;
      spotLight.shadow.camera.far = 10;
      spotLight.shadow.mapSize.width = 1024;
      spotLight.shadow.mapSize.height = 1024;
      scene.add(spotLight);

      let dirLight = new THREE.DirectionalLight(0x55505a, 1);
      dirLight.position.set(0, 3, 0);
      dirLight.castShadow = true;
      dirLight.shadow.camera.near = 1;
      dirLight.shadow.camera.far = 10;

      dirLight.shadow.camera.right = 1;
      dirLight.shadow.camera.left = - 1;
      dirLight.shadow.camera.top = 1;
      dirLight.shadow.camera.bottom = - 1;

      dirLight.shadow.mapSize.width = 1024;
      dirLight.shadow.mapSize.height = 1024;
      scene.add(dirLight);

      let boxLoader = new GLTFLoader();
      boxLoader.load('models/box.glb', function (gltf) {
        box = gltf.scene;
        gltf.scene.scale.set(1, 1, 1);
        gltf.scene.position.x = -0.5;				    //Position (x = right+ left-)
        gltf.scene.position.y = 1.7;				    //Position (y = up+, down-)
        gltf.scene.position.z = 0;				    //Position (z = front +, back-)
        gltf.scene.rotation.x = Math.PI / 2;
        let material = new THREE.MeshPhongMaterial({
          color: 0x11bbbb,
          shininess: 100,
        });
        let material2 = new THREE.MeshPhongMaterial({
          color: 0x222222,
          shininess: 10,
        });
        box.traverse((o) => {
          if (o.isMesh) {
            if (o.name === 'Cube001') {
              o.material = material2;
            }
            else o.material = material;
          }
        });

        box.castShadow = true;
        box.receiveShadow = true;
        scene.add(box);
      });

      var clockLoader = new GLTFLoader();
      clockLoader.load('models/clock.glb', function (glft) {
        clock = glft.scene
        glft.scene.scale.set(0.44, 0.44, 0.44);
        glft.scene.position.x = 0.49;				    //Position (x = right+ left-)
        glft.scene.position.y = -0.3;				    //Position (y = up+, down-)
        glft.scene.position.z = -0.47;				    //Position (z = front +, back-)
        glft.scene.rotation.z = Math.PI / 2;
        glft.scene.rotation.y = - Math.PI / 2;
        var material = new THREE.MeshPhongMaterial({
          color: 0x999999,
          shininess: 100,
        });
        let material2 = new THREE.MeshPhongMaterial({
          color: 0x222222,
          shininess: 10,
        });
        clock.traverse((o) => {
          if (o.isMesh) {
            if (o.name === 'Cube001') o.material = material2;
            else if (o.name === 'Cylinder') {
              o.material = material
              targetList.push(o)
            }
            else o.material = material;
          }
        });
        clock.castShadow = true;
        clock.receiveShadow = true;
        box.add(clock);
      });


      let mo1Loader = new GLTFLoader();
      mo1Loader.load('models/mo1.glb', function (gltf) {
        mo1 = gltf.scene;
        gltf.scene.scale.set(0.42, 0.42, 0.42);
        gltf.scene.position.x = -0.49;				    //Position (x = right+ left-)
        gltf.scene.position.y = -0.3;				    //Position (y = up+, down-)
        gltf.scene.position.z = -0.47;				    //Position (z = front +, back-)
        gltf.scene.rotation.z = Math.PI / 2;
        gltf.scene.rotation.y = - Math.PI / 2;

        let count = '3' // wireCount[Math.floor(Math.random() * wireCount.length)]
        let wireCases = wireCountCases[count]
        let wireCase = wireCases[generateRandom(wireCases.length)]

        const wires = mo1.children.filter(element => element.name.includes('Wire'))
        wires.forEach((wire,index) => {
          wire.material = wireCase.colors[index]
          if (wireCase.correct === index) {
            wire = {...wire, correct: true}
          } else {
            wire = { ...wire, correct: false }
          }
        })
        targetList.push(...wires)
        let material = new THREE.MeshPhongMaterial({
          color: 0x999999,
          shininess: 100,
        });
        let material2 = new THREE.MeshPhongMaterial({
          color: 0x222222,
          shininess: 10,
        });
        let material3 = new THREE.MeshPhongMaterial({
          color: 0x444444,
          shininess: 10,
        })        
        mo1.traverse((o) => {
          if (o.isMesh) {
            if (o.name === 'Cube001') o.material = material2
            else if (o.name === 'Socket') o.material = material3
            // else o.material = material
          }
        });
        mo1.castShadow = true;
        mo1.receiveShadow = true;
        box.add(mo1);
      });

      let fontLoader = new THREE.FontLoader();
      fontLoader.load('fonts/Digital-7_Regular.json', function (font) {

        let textGeo = new THREE.TextGeometry('5:00', {
          font: font,
          size: 12,
          height: 1,
          curveSegments: 2,
          bevelEnabled: true,
          bevelThickness: 1,
          bevelSize: 0.1,
          bevelSegments: 5
        });
        let textMat = new THREE.MeshPhongMaterial({
          color: 0xff1111,
          shininess: 100,
        });
        if (textGeo) {
          textGeo.computeBoundingBox();
          textGeo.computeVertexNormals();
          let text = new THREE.Mesh(textGeo, textMat)
          text.scale.set(0.06, 0.06, 0.06);
          text.position.x = 0.16;
          text.position.y = -0.68;
          text.position.z = 0.8;
          text.rotation.y = Math.PI / 2;
          clock.add(text)
        }
      });

      // var ground = new THREE.Mesh(
      //   new THREE.PlaneBufferGeometry(9, 9, 1, 1),
      //   new THREE.MeshPhongMaterial({ color: 0xa0adaf, shininess: 150 })
      // );

      // ground.rotation.x = - Math.PI / 2; // rotates X/Y to X/Z
      // ground.receiveShadow = true;
      // scene.add(ground);
      // targetList.push(ground)

      // Renderer
      //useRef
      let container = document.getElementById('bomb-box');
      // let container = this.canvasRef
      renderer = new THREE.WebGLRenderer();
      renderer.shadowMap.enabled = true;
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      // window.addEventListener('resize', onWindowResize, false);
      container.appendChild(renderer.domElement);

      // Dragger

      let isDragging = false;
      let previousMousePosition = {
        x: 0,
        y: 0
      };

      const toRadians = (angle) => {
        return angle * (Math.PI / 180);
      };

      const toDegrees = (angle) => {
          return angle * (180 / Math.PI);
      };

      const renderArea = renderer.domElement;

      renderArea.addEventListener('mousedown', (e) => {
        isDragging = true;
      });

      renderArea.addEventListener('mousemove', (e) => {
        let deltaMove = {
          x: e.offsetX - previousMousePosition.x,
          y: e.offsetY - previousMousePosition.y
        };

        if (isDragging) {

          let deltaRotationQuaternion = new THREE.Quaternion().setFromEuler(
            new THREE.Euler(toRadians(deltaMove.y * 1), 0, 0, 'XYZ')
          );
          box.quaternion.multiplyQuaternions(deltaRotationQuaternion, box.quaternion);
        }

        previousMousePosition = {
          x: e.offsetX,
          y: e.offsetY
        };
      });

      document.addEventListener('mouseup', (e) => {
        isDragging = false;
      });


      // Controls
      // let controls = new THREE.OrbitControls( camera, renderer.domElement );
      // controls.target.set( 0, 1, 0 );
      // controls.update();


      projector = new THREE.Projector();
      document.addEventListener('mousedown', onDocumentMouseDown, false);


    }
    function onDocumentMouseDown(event) {
      // the following line would stop any other event handler from firing
      // (such as the mouse's TrackballControls)
      // event.preventDefault();

      // update the mouse variable
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

      // find intersections
      // create a Ray with origin at the mouse position
      //   and direction into the scene (camera direction)
      var vector = new THREE.Vector3(mouse.x, mouse.y, 1);
      projector.unprojectVector(vector, camera);
      var ray = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());
      // create an array containing all objects in the scene with which the ray intersects
      var intersects = ray.intersectObjects(targetList);
      // if there is one (or more) intersections
      if (intersects.length > 0) {
        console.log('intersects', intersects[0])
        intersects[0].object.material.color.setRGB(Math.random(), Math.random(), Math.random())
        mo1.remove(intersects[0].object)
      }
    }



    // function onWindowResize() {

    //   camera.aspect = window.innerWidth / window.innerHeight;
    //   camera.updateProjectionMatrix();

    //   renderer.setSize(window.innerWidth, window.innerHeight);

    // }

    function animate() {

      requestAnimationFrame(animate);

      renderer.render(scene, camera);
    }
  }

  render() {

    return (
      <div id="bomb-box" ref={this.canvasRef.current} />
    );
  }
}

export default Bomb;