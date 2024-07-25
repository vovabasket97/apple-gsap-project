import { useGLTF, useTexture } from '@react-three/drei'
import { GroupProps } from '@react-three/fiber'
import { useEffect } from 'react'
import * as THREE from 'three'

import { defaultConfigModel, modelSize, modelUrl } from '../constants'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getGeometry = (node: any) => node.geometry

const IPhone = (
  props: GroupProps & {
    item: typeof defaultConfigModel
    size: modelSize
  }
) => {
  const { nodes, materials } = useGLTF(modelUrl)

  const texture = useTexture(props.item.img)

  useEffect(() => {
    Object.entries(materials).map((material) => {
      // these are the material names that can't be changed color
      if (material[0] !== 'zFdeDaGNRwzccye' && material[0] !== 'ujsvqBWRMnqdwPx' && material[0] !== 'hUlRcbieVuIiOXG' && material[0] !== 'jlzuBkUzuJqgiAK' && material[0] !== 'xNrofRCqOXXHVZt') {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        material[1].color = new THREE.Color(props.item.color[0])
      }
      material[1].needsUpdate = true
    })
  }, [materials, props.item])

  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={getGeometry(nodes.ttmRoLdJipiIOmf)} material={materials.hUlRcbieVuIiOXG} scale={0.01} />
      <mesh castShadow receiveShadow geometry={getGeometry(nodes.DjsDkGiopeiEJZK)} material={materials.PaletteMaterial001} scale={0.01} />
      <mesh castShadow receiveShadow geometry={getGeometry(nodes.buRWvyqhBBgcJFo)} material={materials.PaletteMaterial002} scale={0.01} />
      <mesh castShadow receiveShadow geometry={getGeometry(nodes.MrMmlCAsAxJpYqQ_0)} material={materials.dxCVrUCvYhjVxqy} scale={0.01} />
      <mesh castShadow receiveShadow geometry={getGeometry(nodes.wqbHSzWaUxBCwxY_0)} material={materials.MHFGNLrDQbTNima} scale={0.01} />
      <mesh castShadow receiveShadow geometry={getGeometry(nodes.QvGDcbDApaGssma)} material={materials.kUhjpatHUvkBwfM} scale={0.01} />
      <mesh castShadow receiveShadow geometry={getGeometry(nodes.vFwJFNASGvEHWhs)} material={materials.RJoymvEsaIItifI} scale={0.01} />
      <mesh castShadow receiveShadow geometry={getGeometry(nodes.evAxFwhaQUwXuua)} material={materials.KSIxMqttXxxmOYl} scale={0.01} />
      <mesh castShadow receiveShadow geometry={getGeometry(nodes.USxQiqZgxHbRvqB)} material={materials.mcPrzcBUcdqUybC} scale={0.01} />
      <mesh castShadow receiveShadow geometry={getGeometry(nodes.TvgBVmqNmSrFVfW)} material={materials.pIhYLPqiSQOZTjn} scale={0.01} />
      <mesh castShadow receiveShadow geometry={getGeometry(nodes.GuYJryuYunhpphO)} material={materials.eShKpuMNVJTRrgg} scale={0.01} />
      <mesh castShadow receiveShadow geometry={getGeometry(nodes.pvdHknDTGDzVpwc)} material={materials.xdyiJLYTYRfJffH} scale={0.01} />
      <mesh castShadow receiveShadow geometry={getGeometry(nodes.CfghdUoyzvwzIum)} material={materials.jpGaQNgTtEGkTfo} scale={0.01} />
      <mesh castShadow receiveShadow geometry={getGeometry(nodes.DjdhycfQYjKMDyn)} material={materials.ujsvqBWRMnqdwPx} scale={0.01} />
      <mesh castShadow receiveShadow geometry={getGeometry(nodes.usFLmqcyrnltBUr)} material={materials.sxNzrmuTqVeaXdg} scale={0.01} />
      <mesh castShadow receiveShadow geometry={getGeometry(nodes.xXDHkMplTIDAXLN)} material={materials.pIJKfZsazmcpEiU} scale={0.01}>
        <meshStandardMaterial roughness={1} map={texture} />
      </mesh>
      <mesh castShadow receiveShadow geometry={getGeometry(nodes.vELORlCJixqPHsZ)} material={materials.zFdeDaGNRwzccye} scale={0.01} />
      <mesh castShadow receiveShadow geometry={getGeometry(nodes.EbQGKrWAqhBHiMv)} material={materials.TBLSREBUyLMVtJa} scale={0.01} />
      <mesh castShadow receiveShadow geometry={getGeometry(nodes.EddVrWkqZTlvmci)} material={materials.xNrofRCqOXXHVZt} scale={0.01} />
      <mesh castShadow receiveShadow geometry={getGeometry(nodes.KSWlaxBcnPDpFCs)} material={materials.yQQySPTfbEJufve} scale={0.01} />
      <mesh castShadow receiveShadow geometry={getGeometry(nodes.TakBsdEjEytCAMK)} material={materials.PaletteMaterial003} scale={0.01} />
      <mesh castShadow receiveShadow geometry={getGeometry(nodes.IykfmVvLplTsTEW)} material={materials.PaletteMaterial004} scale={0.01} />
      <mesh castShadow receiveShadow geometry={getGeometry(nodes.wLfSXtbwRlBrwof)} material={materials.oZRkkORNzkufnGD} scale={0.01} />
      <mesh castShadow receiveShadow geometry={getGeometry(nodes.WJwwVjsahIXbJpU)} material={materials.yhcAXNGcJWCqtIS} scale={0.01} />
      <mesh castShadow receiveShadow geometry={getGeometry(nodes.YfrJNXgMvGOAfzz)} material={materials.bCgzXjHOanGdTFV} scale={0.01} />
      <mesh castShadow receiveShadow geometry={getGeometry(nodes.DCLCbjzqejuvsqH)} material={materials.vhaEJjZoqGtyLdo} scale={0.01} />
      <mesh castShadow receiveShadow geometry={getGeometry(nodes.CdalkzDVnwgdEhS)} material={materials.jlzuBkUzuJqgiAK} scale={0.01} />
      <mesh castShadow receiveShadow geometry={getGeometry(nodes.NtjcIgolNGgYlCg)} material={materials.PpwUTnTFZJXxCoE} scale={0.01} />
      <mesh castShadow receiveShadow geometry={getGeometry(nodes.pXBNoLiaMwsDHRF)} material={materials.yiDkEwDSyEhavuP} scale={0.01} />
      <mesh castShadow receiveShadow geometry={getGeometry(nodes.IkoiNqATMVoZFKD)} material={materials.hiVunnLeAHkwGEo} scale={0.01} />
      <mesh castShadow receiveShadow geometry={getGeometry(nodes.rqgRAGHOwnuBypi)} material={materials.HGhEhpqSBZRnjHC} scale={0.01} />
    </group>
  )
}

export default IPhone

useGLTF.preload(modelUrl)
