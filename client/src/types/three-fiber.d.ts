import { extend } from '@react-three/fiber'
import { Mesh, BoxGeometry, ConeGeometry, MeshStandardMaterial } from 'three'

extend({ Mesh, BoxGeometry, ConeGeometry, MeshStandardMaterial })

declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: any
      boxGeometry: any
      coneGeometry: any
      meshStandardMaterial: any
      ambientLight: any
      directionalLight: any
      pointLight: any
    }
  }
}