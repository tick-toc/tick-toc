import React, { Component } from 'react';
import * as THREE from 'three';
import GLTFLoader from 'three-gltf-loader'

class Bomb extends Component {

  componentDidMount() {

    var camera, scene, renderer, box, clock, mo1;

    init();
    animate();
    
    function init() {
    
      camera = new THREE.PerspectiveCamera( 36, window.innerWidth / window.innerHeight, 0.25, 16 );
    
      camera.position.set( 0, 1.8, 5 );
    
      scene = new THREE.Scene();
    
      // Lights
    
      scene.add( new THREE.AmbientLight( 0x505050 ) );
    
      var spotLight = new THREE.SpotLight( 0xffffff );
      spotLight.angle = Math.PI / 5;
      spotLight.penumbra = 0.2;
      spotLight.position.set( 2, 3, 3 );
      spotLight.castShadow = true;
      spotLight.shadow.camera.near = 3;
      spotLight.shadow.camera.far = 10;
      spotLight.shadow.mapSize.width = 1024;
      spotLight.shadow.mapSize.height = 1024;
      scene.add( spotLight );
    
      var dirLight = new THREE.DirectionalLight( 0x55505a, 1 );
      dirLight.position.set( 0, 3, 0 );
      dirLight.castShadow = true;
      dirLight.shadow.camera.near = 1;
      dirLight.shadow.camera.far = 10;
    
      dirLight.shadow.camera.right = 1;
      dirLight.shadow.camera.left = - 1;
      dirLight.shadow.camera.top	= 1;
      dirLight.shadow.camera.bottom = - 1;
    
      dirLight.shadow.mapSize.width = 1024;
      dirLight.shadow.mapSize.height = 1024;
      scene.add( dirLight );

      var boxLoader= new GLTFLoader();
      boxLoader.load('models/box.glb', function (gltf) {
        box = gltf.scene;				
        gltf.scene.scale.set( 1, 1, 1 );			   
        gltf.scene.position.x = -0.5;				    //Position (x = right+ left-) 
        gltf.scene.position.y = 1.7;				    //Position (y = up+, down-)
        gltf.scene.position.z = 0;				    //Position (z = front +, back-)
        gltf.scene.rotation.x = Math.PI / 2;
        var material = new THREE.MeshPhongMaterial( {
        color: 0x11bbbb,
        shininess: 100,
        } );
        var material2 = new THREE.MeshPhongMaterial( {
          color: 0x222222,
          shininess: 10,
          } );
        box.traverse ( ( o ) => {
        if ( o.isMesh ) {
          if (o.name === 'Cube001') o.material = material2;
          else o.material = material;
          }
        } );
        
        box.castShadow = true;
        box.receiveShadow = true;
        scene.add( box );
      });

      var clockLoader= new GLTFLoader();
      clockLoader.load('models/clock.glb', function (gltf) {
        clock = gltf.scene;				
        gltf.scene.scale.set( 0.44, 0.44, 0.44 );			   
        gltf.scene.position.x = 0.49;				    //Position (x = right+ left-) 
        gltf.scene.position.y = -0.3;				    //Position (y = up+, down-)
        gltf.scene.position.z = -0.47;				    //Position (z = front +, back-)
        gltf.scene.rotation.z = Math.PI / 2;
        gltf.scene.rotation.y = - Math.PI / 2;
        var material = new THREE.MeshPhongMaterial( {
        color: 0x999999,
        shininess: 100,
        } );
        var material2 = new THREE.MeshPhongMaterial( {
          color: 0x222222,
          shininess: 10,
          } );
        clock.traverse ( ( o ) => {
        if ( o.isMesh ) {
          if (o.name === 'Cube001') o.material = material2;
          else o.material = material;
          }
        } );
        
        clock.castShadow = true;
        clock.receiveShadow = true;
        box.add( clock );
      });


      var mo1Loader= new GLTFLoader();
      mo1Loader.load('models/mo1.glb', function (gltf) {
        mo1 = gltf.scene;				
        gltf.scene.scale.set( 0.42, 0.42, 0.42 );			   
        gltf.scene.position.x = -0.49;				    //Position (x = right+ left-) 
        gltf.scene.position.y = -0.3;				    //Position (y = up+, down-)
        gltf.scene.position.z = -0.47;				    //Position (z = front +, back-)
        gltf.scene.rotation.z = Math.PI / 2;
        gltf.scene.rotation.y = - Math.PI / 2;
        var material = new THREE.MeshPhongMaterial( {
        color: 0x999999,
        shininess: 100,
        } );
        var material2 = new THREE.MeshPhongMaterial( {
          color: 0x222222,
          shininess: 10,
        } );
        var material3 = new THREE.MeshPhongMaterial( {
          color: 0x444444,
          shininess: 10,
        } );
        var red = new THREE.MeshPhongMaterial( {
          color: 0xff1111,
          shininess: 100,
        } );
        var white = new THREE.MeshPhongMaterial( {
          color: 0xffffff,
          shininess: 100,
        } );
        var blue = new THREE.MeshPhongMaterial( {
          color: 0x0000ff,
          shininess: 100,
        } );
        mo1.traverse ( ( o ) => {
        if ( o.isMesh ) {
          console.log('mo1',o)
          if (o.name === 'Cube001' ) o.material = material2;
          else if (o.name === 'Socket001' || o.name === 'Socket') o.material = material3;
          else if (o.name === 'BezierCurve') o.material = red;
          else if (o.name === 'BezierCurve002') o.material = white;
          else if (o.name === 'BezierCurve003') o.material = blue;
          else o.material = material;
          }
        } );
        
        mo1.castShadow = true;
        mo1.receiveShadow = true;
        box.add( mo1 );
      });

      var fontLoader = new THREE.FontLoader();
      fontLoader.load( 'fonts/Digital-7_Regular.json', function ( font ) {
      
        var textGeo = new THREE.TextGeometry( '5:00', {
          font: font,
          size: 12,
          height: 1,
          curveSegments: 2,
          bevelEnabled: true,
          bevelThickness: 1,
          bevelSize: 0.1,
          bevelSegments: 5
        } );
        var textMat = new THREE.MeshPhongMaterial( {
          color: 0xff1111,
          shininess: 100,
        } );
        if(textGeo){
          textGeo.computeBoundingBox();
          textGeo.computeVertexNormals();
          var text = new THREE.Mesh(textGeo, textMat)
          text.scale.set( 0.06, 0.06, 0.06 );
          text.position.x = 0.16;
          text.position.y = -0.68;
          text.position.z = 0.8;
          text.rotation.y = Math.PI / 2;
          clock.add(text)
        }
      });
    
      var ground = new THREE.Mesh(
        new THREE.PlaneBufferGeometry( 9, 9, 1, 1 ),
        new THREE.MeshPhongMaterial( { color: 0xa0adaf, shininess: 150 } )
      );
    
      ground.rotation.x = - Math.PI / 2; // rotates X/Y to X/Z
      ground.receiveShadow = true;
      scene.add( ground );
    
      // Renderer
      var container = document.getElementById( 'bomb-box' );
      renderer = new THREE.WebGLRenderer();
      renderer.shadowMap.enabled = true;
      renderer.setPixelRatio( window.devicePixelRatio );
      renderer.setSize( window.innerWidth, window.innerHeight );
      window.addEventListener( 'resize', onWindowResize, false );
      container.appendChild( renderer.domElement );

      // Ray Caster

      // add ray caster and mouse as 2D vector
      // const rayCaster = new THREE.Raycaster();
      // let mouse = new THREE.Vector2()

      // function onDocumentMouseDown(event) {
      //   event.preventDefault();
      //   mouse.x = (event.clientX / renderer.domElement.width) * 2 - 1;
      //   mouse.y = (event.clientY / renderer.domElement.height) * 2 + 1;
      //   rayCaster.setFromCamera( mouse, camera);
      //   // let intersects = rayCaster.intersectObjects( objects );
      //   let color = (Math.rando() * 0xffffff);

      //   if(intersects.length > 0) {
      //     intersects[0].object.material.color.setHex(color);
      //     let temp = intersects[0].object.material.color.getHexString();
      //     let name = intersects[0].object.name;
      //     console.log("object ->", name, "color ->", temp)
      //   }
      // }

      // add mouse events listener and callback function
      // document.addEventListener('mousedown', onDocumentMouseDown, false)




    
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
              x: e.offsetX-previousMousePosition.x,
              y: e.offsetY-previousMousePosition.y
          };
        
          if(isDragging) {
          
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
    }
    
    function onWindowResize() {
    
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    
      renderer.setSize( window.innerWidth, window.innerHeight );
    
    }
    
    function animate() {
    
      requestAnimationFrame( animate );
    
      // if (box) box.rotation.x += 0.005;
    
      renderer.render( scene, camera );
    }
  }

  render() {
    
    return (
      <div />
    );
  }
}

export default Bomb;