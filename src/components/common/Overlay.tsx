import styled from 'styled-components'
import React, { ReactElement } from 'react'

export const Overlay = ({onHandleOverlayClick} : {onHandleOverlayClick: ()=>void}) : ReactElement => {

  return (
      <OverlayContainer
        onClick={()=>{onHandleOverlayClick()}}
      />
  )
}

const OverlayContainer
  = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: 0.7;
`
