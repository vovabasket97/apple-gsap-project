import { Html } from '@react-three/drei'
import { FC } from 'react'

interface LoaderProps {}

const Loader: FC<LoaderProps> = () => {
  return (
    <Html>
      <div className="absolute left-0 top-0 flex size-full items-center justify-center">
        <div className="size-[10vw] rounded-full">
          <span className="loader"></span>
        </div>
      </div>
    </Html>
  )
}

export default Loader
