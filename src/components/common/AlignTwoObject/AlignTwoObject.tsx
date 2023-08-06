import { ReactNode } from 'react'
import Style from './AlignTwoObject.module.scss'

type AlignTwoObjectProps = {
  rightEle: ReactNode
  leftEle: ReactNode
  width?: string
  alignedPosition?: 'center' | 'left' | 'right'
  gap?: string
  fontSize?: string
  marginTop?: string
}
const AlignTwoObject = ({
  rightEle,
  leftEle,
  fontSize,
  alignedPosition,
  gap = '0',
  width = '100%',
  marginTop = '20px',
}: AlignTwoObjectProps) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <div
        className={Style.assign}
        style={{ fontSize: fontSize, width: width, gap: gap, marginTop: marginTop }}
      >
        <div className={Style['assign-el']} style={{ justifyContent: alignedPosition }}>
          {leftEle}
        </div>
        <div className={Style['assign-el']} style={{ justifyContent: alignedPosition }}>
          {rightEle}
        </div>
      </div>
    </div>
  )
}

export default AlignTwoObject
