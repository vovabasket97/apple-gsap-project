import { OrbitControls, PerspectiveCamera, View } from '@react-three/drei'
import classNames from 'classnames'
import { FC, Suspense } from 'react'
import * as THREE from 'three'
import { OrbitControls as OrbitControlsType } from 'three-stdlib'

import { defaultConfigModel, modelSize } from '../constants'

import IPhone from './IPhone'
import Lights from './Lights'
import Loader from './Loader'

interface ModelViewProps {
  index: number
  groupRef: React.MutableRefObject<THREE.Group<THREE.Object3DEventMap>>
  gsapType: string
  controlRef: React.RefObject<OrbitControlsType>
  setRotationState: React.Dispatch<React.SetStateAction<number>>
  item: typeof defaultConfigModel
  size: modelSize
}

const ModelView: FC<ModelViewProps> = ({ controlRef, groupRef, gsapType, index, item, setRotationState, size }) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={classNames('absolute w-full h-full', {
        'right-[-100%]': index === 2,
      })}
    >
      <ambientLight intensity={7.6} />

      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
      <Lights />

      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationState(controlRef.current?.getAzimuthalAngle() || 0)}
      />

      <group ref={groupRef} name={index === 1 ? modelSize.small : modelSize.large}>
        <Suspense fallback={<Loader />}>
          <IPhone scale={index === 1 ? [15, 15, 15] : [17, 17, 17]} item={item} size={size} />
        </Suspense>
      </group>
    </View>
  )
}

export default ModelView
