import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from '@react-three/drei'
import './App.css'
import { Closet } from './assets/models/Closet'

function View() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[3, 0, 3]} />
      <OrbitControls autoRotate />
      <Closet receiveShadow position={[0, 0, -0.5]} />

      <Environment background blur={1} preset="apartment" />
      <ambientLight />
      <directionalLight args={['#FFF', 1]} position={[3, 3, 3]} castShadow />
    </>
  )
}

export default View
