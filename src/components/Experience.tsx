export default function Experience() {
  return (
    <>
      <group>
        <mesh position-x={-2}>
          <sphereGeometry />
          <meshBasicMaterial color="orange" />
        </mesh>
        <mesh position-x={2} rotation-y={Math.PI * 0.25} scale={1.5}>
          <boxGeometry scale={1.5} />
          <meshBasicMaterial color="red" />
        </mesh>
      </group>

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshBasicMaterial color="green" />
      </mesh>
    </>
  );
}
