import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { FC, useEffect, useState } from 'react'

import { heroVideo, smallHeroVideo } from '../utils'

interface HeroProps {}

const videoSrcSetHandler = () => (window.innerWidth < 760 ? smallHeroVideo : heroVideo)
const setVideoSrcHandler = (setter: React.Dispatch<React.SetStateAction<string>>) => setter(videoSrcSetHandler())

const Hero: FC<HeroProps> = () => {
  const [videoSrc, setVideoSrc] = useState(videoSrcSetHandler())

  useEffect(() => {
    window.addEventListener('resize', setVideoSrcHandler.bind(null, setVideoSrc))

    return () => window.removeEventListener('resize', setVideoSrcHandler.bind(null, setVideoSrc))
  }, [])

  useGSAP(() => {
    gsap.to('#hero-title', { opacity: 1, y: 0, delay: 1.7, ease: 'circ.inOut' })
    gsap.to('#cta', { opacity: 1, y: -100, delay: 1.7, ease: 'circ.inOut' })
  }, [])

  return (
    <section className="nav-height relative w-full bg-black">
      <div className="flex-center flex h-5/6 w-full flex-col">
        <p id="hero-title" className="hero-title -translate-y-20">
          iPhone 15 Pro
        </p>
        <div className="w-9/12 md:w-10/12">
          <video autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div id="cta" className="flex translate-y-20 flex-col items-center opacity-0">
        <div id="highlights" className="btn">
          Buy
        </div>
        <p className="text-xl font-normal">From $199/month or $999</p>
      </div>
    </section>
  )
}

export default Hero
