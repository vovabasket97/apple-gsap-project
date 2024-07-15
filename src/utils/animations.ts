import * as THREE from 'three'

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
