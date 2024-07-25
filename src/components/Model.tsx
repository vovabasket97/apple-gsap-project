import { useGSAP } from '@gsap/react'
import { View } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import classNames from 'classnames'
import gsap from 'gsap'
import { FC, useEffect, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import * as THREE from 'three'
import { OrbitControls as OrbitControlsType } from 'three-stdlib'

import { defaultConfigModel, modelSize, models, sizes } from '../constants'
import { animateWithGsap, animateWithGsapTimeline } from '../utils/animations'

import ModelView from './ModelView'

interface ModelProps {}

const eventSource = document.getElementById('root') as HTMLElement
const timeline = gsap.timeline()

const Model: FC<ModelProps> = () => {
  const [size, setSize] = useState(modelSize.small)
  const [model, setModel] = useState(defaultConfigModel)

  // camera controls for the model view
  const cameraControllSmall = useRef<OrbitControlsType>(null)
  const cameraControllLarge = useRef<OrbitControlsType>(null)

  // model
  const smallGroup = useRef(new THREE.Group())
  const largeGroup = useRef(new THREE.Group())

  // rotation
  const [smallRotation, setSmallRotation] = useState(0)
  const [largeRotation, setLargeRotation] = useState(0)

  useGSAP(() => {
    animateWithGsap('#heading', { y: 0, opacity: 1 })
  }, [])

  useEffect(() => {
    if (size === modelSize.large) {
      animateWithGsapTimeline(timeline, smallGroup, smallRotation, '#view1', '#view2', { transform: 'translate(-100%)', duration: 2 })
    }
    if (size === modelSize.small) {
      animateWithGsapTimeline(timeline, largeGroup, largeRotation, '#view2', '#view1', { transform: 'translate(0)', duration: 2 })
    }
  }, [size])

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading">
          Take a closer look.
        </h1>

        <div className="mt-5 flex flex-col items-center">
          <div className="relative h-[75vh] w-full overflow-hidden md:h-[90vh]">
            <ModelView index={1} groupRef={smallGroup} gsapType="view1" controlRef={cameraControllSmall} setRotationState={setSmallRotation} item={model} size={size} />
            <ModelView index={2} groupRef={largeGroup} gsapType="view2" controlRef={cameraControllLarge} setRotationState={setLargeRotation} item={model} size={size} />

            <Canvas className="size-full" style={{ position: 'fixed', width: '100%', height: '100%', top: 0, bottom: 0, left: 0, right: 0, overflow: 'hidden' }} eventSource={eventSource}>
              <View.Port />
            </Canvas>
          </div>

          <div className="mx-auto w-full">
            <p className="mb-5 text-center text-sm font-light">{model.title}</p>

            <div className="flex-center">
              <ul className="color-container">
                {models.map((item) => (
                  <li
                    key={item.id + item.title}
                    className={twMerge(
                      classNames('mx-2 size-6 cursor-pointer rounded-full border-2 border-transparent', {
                        'border-white': item.id === model.id,
                      })
                    )}
                    style={{ backgroundColor: item.color[0] }}
                    onClick={() => setModel(item)}
                  ></li>
                ))}
              </ul>

              <button className="size-btn-container">
                {sizes.map(({ label, value }) => (
                  <span
                    key={label}
                    className="size-btn"
                    style={{ backgroundColor: size === value ? 'white' : 'transparent', color: size === value ? 'black' : 'white' }}
                    onClick={() => setSize(value)}
                  >
                    {label}
                  </span>
                ))}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Model
