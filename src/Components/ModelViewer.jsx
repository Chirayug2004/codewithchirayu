// ModelViewer.jsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model() {
  const gltf = useGLTF("./src/assets/Model.glb"); // Place model.glb in your public folder
  return <primitive object={gltf.scene} scale={0.3} />;
}

const ModelViewer = () => {
  return (
    <Canvas camera={{ position: [5, 2, 5], fov: 60 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <OrbitControls enableZoom={false} />
      <Model />
    </Canvas>
  );
};

export default ModelViewer;
