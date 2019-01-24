import React, { Component } from 'react';
import * as THREE from 'three';
import GLTFLoader from 'three-gltf-loader'
import '../styles/App.css';

class Bomb extends Component {
  render() {
    var camera, scene, renderer, box;

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
        gltf.scene.position.y = 1.5;				    //Position (y = up+, down-)
        gltf.scene.position.z = -1;				    //Position (z = front +, back-)
        gltf.scene.rotation.x = Math.PI / 2;
        var material = new THREE.MeshPhongMaterial( {
        color: 0x11bbbb,
        shininess: 100,
    
        } );
        box.traverse ( ( o ) => {
        if ( o.isMesh ) {
          o.material = material;
          }
        } );
        
        box.castShadow = true;
        scene.add( box );
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
    
      // Dragger
    
      var isDragging = false;
      var previousMousePosition = {
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
    
    return (
      <div id="bomb-box">
      </div>
    );
  }
}

export default Bomb;