import React, { Component } from 'react';
import * as THREE from 'three';
import GLTFLoader from 'three-gltf-loader'
import {OBJLoader} from 'three-obj-mtl-loader'

class Bomb extends Component {
  constructor(props) {
    super(props)
    this.canvasRef = React.createRef()
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

      var spotLight = new THREE.SpotLight(0xffffff);
      spotLight.angle = Math.PI / 5;
      spotLight.penumbra = 0.2;
      spotLight.position.set(2, 3, 3);
      spotLight.castShadow = true;
      spotLight.shadow.camera.near = 3;
      spotLight.shadow.camera.far = 10;
      spotLight.shadow.mapSize.width = 1024;
      spotLight.shadow.mapSize.height = 1024;
      scene.add(spotLight);

      var dirLight = new THREE.DirectionalLight(0x55505a, 1);
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

      var boxLoader = new GLTFLoader();
      boxLoader.load('models/box.glb', function (gltf) {
        box = gltf.scene;
        gltf.scene.scale.set(1, 1, 1);
        gltf.scene.position.x = -0.5;				    //Position (x = right+ left-)
        gltf.scene.position.y = 1.7;				    //Position (y = up+, down-)
        gltf.scene.position.z = 0;				    //Position (z = front +, back-)
        gltf.scene.rotation.x = Math.PI / 2;
        var material = new THREE.MeshPhongMaterial({
          color: 0x11bbbb,
          shininess: 100,
        });
        var material2 = new THREE.MeshPhongMaterial({
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
        var material2 = new THREE.MeshPhongMaterial({
          color: 0x222222,
          shininess: 10,
        });
        var red = new THREE.MeshPhongMaterial({
          color: 0xff1111,
          shininess: 100,
        });
        clock.traverse((o) => {
          if (o.isMesh) {
            if (o.name === 'Cube001') o.material = material2;
            else if (o.name === 'Strike1' || o.name === 'Strike2') {
              o.material = red
              o.visible = false;
            }
            else o.material = material;
          }
        });
        clock.castShadow = true;
        clock.receiveShadow = true;
        box.add(clock);
      });


      var mo1Loader = new GLTFLoader();
      mo1Loader.load('models/mo1.glb', function (gltf) {
        mo1 = gltf.scene;
        gltf.scene.scale.set(0.42, 0.42, 0.42);
        gltf.scene.position.x = -0.49;				    //Position (x = right+ left-)
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
        var material3 = new THREE.MeshPhongMaterial({
          color: 0x444444,
          shininess: 10,
        });
        var red = new THREE.MeshPhongMaterial({
          color: 0xff1111,
          shininess: 100,
        });
        var white = new THREE.MeshPhongMaterial({
          color: 0xffffff,
          shininess: 100,
        });
        var blue = new THREE.MeshPhongMaterial({
          color: 0x0000ff,
          shininess: 100,
        });
        var yellow = new THREE.MeshPhongMaterial({
          color: 0xeedd00,
          shininess: 100,
        });
        var grey = new THREE.MeshPhongMaterial({
          color: 0x333333,
          shininess: 100,
        });
        mo1.traverse((o) => {
          if (o.isMesh) {
            if (o.name === 'Cube001') o.material = material2;
            else if (o.name === 'Socket') o.material = material3;
            else if (o.name === 'Wire1' || o.name === 'Wire1Cut') {
              o.material = red;
              targetList.push(o)
            }
            else if (o.name === 'Wire2' || o.name === 'Wire2Cut' || o.name === 'Wire5' || o.name === 'Wire5Cut') { 
              o.material = white;
              targetList.push(o)
            } else if (o.name === 'Wire3' || o.name === 'Wire3Cut'|| o.name === 'Wire6' ||         o.name === 'Wire6Cut') {
              o.material = blue;
              targetList.push(o)
            } else if (o.name === 'Wire4' || o.name === 'Wire4Cut') {
            o.material = yellow;
            targetList.push(o)
            } else if (o.name === 'LED') {
              o.material = grey;
              targetList.push(o)
              }
            else o.material = material;
          }
        });
        mo1.castShadow = true;
        mo1.receiveShadow = true;
        box.add(mo1);
      });

      var fontLoader = new THREE.FontLoader();
      fontLoader.load('fonts/Digital-7_Regular.json', function (font) {

        var textGeo = new THREE.TextGeometry('5:00', {
          font: font,
          size: 12,
          height: 1,
          curveSegments: 2,
          bevelEnabled: true,
          bevelThickness: 1,
          bevelSize: 0.1,
          bevelSegments: 5
        });
        var textMat = new THREE.MeshPhongMaterial({
          color: 0xff1111,
          shininess: 100,
        });
        if (textGeo) {
          textGeo.computeBoundingBox();
          textGeo.computeVertexNormals();
          var text = new THREE.Mesh(textGeo, textMat)
          text.scale.set(0.06, 0.06, 0.06);
          text.position.x = 0.16;
          text.position.y = -0.68;
          text.position.z = 0.8;
          text.rotation.y = Math.PI / 2;
          clock.add(text)
        }
      });

      // Renderer
      //useRef
      var container = document.getElementById('bomb-box');
      // var container = this.canvasRef
      renderer = new THREE.WebGLRenderer();
      renderer.shadowMap.enabled = true;
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      window.addEventListener('resize', onWindowResize, false);
      container.appendChild(renderer.domElement);

      // Dragger

      var isDragging = false;
      var previousMousePosition = {
        x: 0,
        y: 0
      };

      const toRadians = (angle) => {
        return angle * (Math.PI / 180);
      };

      // const toDegrees = (angle) => {
      //     return angle * (180 / Math.PI);
      // };

      const renderArea = renderer.domElement;

      renderArea.addEventListener('mousedown', (e) => {
        isDragging = true;
      });

      renderArea.addEventListener('mousemove', (e) => {
        var deltaMove = {
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
      // var controls = new THREE.OrbitControls( camera, renderer.domElement );
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
        mo1.remove(intersects[0].object)
        if (intersects[0].object.name === 'Wire4') {
          mo1.children.filter(a => a.name === "LED")[0].material.color.setRGB(0,1,0)
        } else {
          if (clock.children.filter( a => a.name === 'Strike1')[0].visible) clock.children.filter( a => a.name === 'Strike2')[0].visible = true
          else clock.children.filter( a => a.name === 'Strike1')[0].visible = true

        }
      }
    }



    function onWindowResize() {

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);

    }

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