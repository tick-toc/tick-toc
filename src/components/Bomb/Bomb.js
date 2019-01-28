import React, { Component } from 'react';
import * as THREE from 'three';
import GLTFLoader from 'three-gltf-loader'
import * as SOW from './SubjectOfWires/SubjectOfWires'
import { generateRandom } from '../../util'

class Bomb extends Component {
  constructor(props) {
    super(props)
    this.canvasRef = React.createRef()
    this.state = {
      SubjectOfWires: {
        inactive: true,
        active: false,
        passed: false,
        failed: false,
      },
      moduleTwo: {
        inactive: true,
        active: false,
        passed: false,
        failed: false
      },
      moduleThree: {
        inactive: true,
        active: false,
        passed: false,
        failed: false
      },
      moduleFour: {
        inactive: true,
        active: false,
        passed: false,
        failed: false
      },
      moduleFive: {
        inactive: true,
        active: false,
        passed: false,
        failed: false
      },

      timer: 300,
      strikesAllowed: 3,
      strikeCount: 0,
      box: {},
      clockTime: {},
      module1: {}
    }
  }

  componentDidMount() {

    var camera, scene, renderer, box, clock, module1;
    var targetList = [];
    var projector, mouse = { x: 0, y: 0 };

    init(this);
    animate();

    function init(THIS) {

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
          color: 0xa9acb5,
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
        THIS.setState({ box })
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
        THIS.setState({ clock })
        box.add(clock);
      });

      let module1Loader = new GLTFLoader();
      module1Loader.load('models/mo1.glb', function (gltf) {
        module1 = gltf.scene;
        gltf.scene.scale.set(0.42, 0.42, 0.42);
        gltf.scene.position.x = -0.49;				    //Position (x = right+ left-)
        gltf.scene.position.y = -0.3;				    //Position (y = up+, down-)
        gltf.scene.position.z = -0.47;				    //Position (z = front +, back-)
        gltf.scene.rotation.z = Math.PI / 2;
        gltf.scene.rotation.y = - Math.PI / 2;

        let count = 3 // parseInt(SOW.wireCount[Math.floor(Math.random() * wireCount.length)])
        let wireCases = SOW.wireCountCases[count]
        let wireCase = wireCases[generateRandom(wireCases.length)]
        let wires = module1.children.filter(element => element.name.startsWith('Wire'))
        let uncutWires = wires.filter(wire => !wire.name.endsWith('Cut')).sort((a, b) => {
          if (a.name < b.name) return -1
          else if (a.name > b.name) return 1
          else return 0
        })
        let cutWires = wires.filter(wire => wire.name.endsWith('Cut')).sort((a, b) => {
          if (a.name < b.name) return -1
          else if (a.name > b.name) return 1
          else return 0
        })
        while (cutWires.length > count) {
          let wireIndex = generateRandom(cutWires.length)
          module1.remove(cutWires[wireIndex])
          module1.remove(uncutWires[wireIndex])
          cutWires = cutWires.filter((wire, index) => index !== wireIndex)
          uncutWires = uncutWires.filter((wire, index) => index !== wireIndex)
        }

        uncutWires.forEach((wire, index) => {
          wire.material = wireCase.colors[index]
          cutWires[index].material = wireCase.colors[index]
          if (wireCase.correct === index) {
            wire.userData = { correct: true }
          } else {
            wire.userData = { correct: false }
          }
          targetList.push(wire)
        })

        module1.traverse((o) => {
          if (o.isMesh) {
            if (o.name === 'Cube001') o.material = SOW.cubeMaterial
            else if (o.name === 'Socket') o.material = SOW.socketMaterial
            else if (o.name === 'LED') {
              let em = new THREE.Color(0x000000);
              let LEDmo1 = new THREE.PointLight(0x00ff00, 5, 0.2, 2);
              LEDmo1.name = "LED1"
              module1.add(LEDmo1);
              LEDmo1.position.copy(o.position);
              LEDmo1.visible = false;
              o.material = new THREE.MeshPhongMaterial({ transparent: true, opacity: 0.9, emissive: em, color: em, shininess: 100 });
            }
            else if (!o.name.includes('Wire')) o.material = SOW.defaultMaterial
          }
        });

        module1.castShadow = true;
        module1.receiveShadow = true;
        THIS.setState({ module1 })
        box.add(module1);
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
          THIS.setState({ clockTime: text })
          // clock.add(text)
        }
      });

      // Renderer

      let container = document.getElementById('bomb-box');
      // let container = this.canvasRef
      renderer = new THREE.WebGLRenderer();
      renderer.shadowMap.enabled = true;
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      window.addEventListener('resize', onWindowResize, false);
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

      projector = new THREE.Projector();
      document.addEventListener('mousedown', (e => { onDocumentMouseDown(e, THIS) }), false);

    }

    function onDocumentMouseDown(event, THIS) {
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
        THIS.handleSOW(intersects[0].object.userData)
        module1.remove(intersects[0].object)
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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.strikeCount < this.state.strikeCount) {
      if (this.state.strikeCount === this.state.strikesAllowed) console.log('GAME OVER')
      else {
        const count = this.state.strikeCount
        const Strike = this.state.clock.children.find(child => child.name === `Strike${count}`)
        Strike.material = new THREE.MeshPhongMaterial({
          color: 0xFF0000,
          shininess: 10,
        })
      }
      // make a util for strike material and a helper function for getting and setting a strike
    } else if (this.state)
      if (prevState.SubjectOfWires.passed !== this.state.SubjectOfWires.passed) {
        // helperfunction and util for LED; pass in the module and turn on its LED
        const LED = this.state.module1.children.find(child => child.name === 'LED')
        LED.material.color.setRGB(0, 1, 0)
        console.log('LED herer', LED)
        this.state.module1.children.filter(a => a.name === 'LED1')[0].visible = true;
      }

    if (prevState.timer !== this.state.timer) {

    }

  }

  handleSOW = wire => {
    if (wire.correct === true) {
      this.setState(({ SubjectOfWires }) => ({
        SubjectOfWires: {
          ...SubjectOfWires,
          passed: !SubjectOfWires.passed
        }
      }))
    } else {
      this.setState(({ strikeCount }) => ({
        strikeCount: strikeCount + 1
      }))
    }
  }

  render() {

    return (
      <div id="bomb-box" ref={this.canvasRef.current} />
    );
  }
}

export default Bomb;