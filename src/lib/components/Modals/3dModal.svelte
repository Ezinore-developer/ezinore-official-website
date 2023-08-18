<script>
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';

	let width = 1;
	let height = 1;
	let depth = 1;

	let spin = 0;

  

	SC.onFrame(() => {
		spin += 0.01;
	});
</script>

<SC.Canvas
  
	antialias

	fog={new THREE.FogExp2('papayawhip', 0.1)}
	shadows
>
	<SC.Mesh
		geometry={new THREE.BoxGeometry()}
		material={new THREE.MeshStandardMaterial({ color: 0xff3e00 })}
		scale={[width, height, depth]}
		castShadow
	/>

	<SC.PerspectiveCamera position={[1, 1, 3]} />
	<SC.AmbientLight intensity={0.6} />
</SC.Canvas>


<style>
	

</style>
