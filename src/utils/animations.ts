import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import * as THREE from 'three'

gsap.registerPlugin(ScrollTrigger)

export const animateWithGsap = (target: string, animationProps: gsap.TweenVars = {}, scrollProps: ScrollTrigger.Vars = {}) => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: 'restart reverse restart reverse',
      start: 'top 85%',
      ...scrollProps,
    },
  })
}

export const animateWithGsapTimeline = (
  timeline: gsap.core.Timeline,
  modelRef: React.MutableRefObject<THREE.Group<THREE.Object3DEventMap>>,
  rotationState: number,
  animationFirstTarget: string,
  animationSecondTarget: string,
  animationConfig: gsap.TweenVars
) => {
  timeline.to(modelRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: 'power2.inOut',
  })
  timeline.to(
    animationFirstTarget,
    {
      ...animationConfig,
      ease: 'power2.inOut',
    },
    '<'
  )
  timeline.to(
    animationSecondTarget,
    {
      ...animationConfig,
      ease: 'power2.inOut',
    },
    '<'
  )
}
