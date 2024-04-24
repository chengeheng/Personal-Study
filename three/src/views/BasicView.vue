<script setup>
import { onMounted, ref } from 'vue';
import * as THREE from 'three';

const dom = ref(null);

// 创建场景
// 场景能够让你在什么地方，摆放什么东西来交给three.js去渲染，这是你放置物体、灯光和摄像机的地方
const scene = new THREE.Scene();

// 创建相机
const camera = new THREE.PerspectiveCamera();
camera.position.y = 5;
camera.position.z = 10;
// camera.lookAt(0, 0, 0);

// 创建立方体
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// 网格
const cube = new THREE.Mesh(geometry, material);
cube.position.set(0, 3, 0);
scene.add(cube);

// 添加网格地面
const gridHelper = new THREE.GridHelper(10, 10);
scene.add(gridHelper);

// 创建渲染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(600, 400);

onMounted(() => {
  // 将渲染器添加到桌面
  dom.value.appendChild(renderer.domElement);

  // 进行渲染
  renderer.render(scene, camera);
});
</script>
<template>
  <div ref="dom"></div>
</template>

<style></style>
