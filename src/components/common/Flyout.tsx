import styled from 'styled-components'
import React from 'react'
import { Portal } from '../UI/Portal'
import { Overlay } from './Overlay'

export const Flyout = ({isOpen, closeFlyout}: any): any => {
  console.log(isOpen)
  if (!isOpen) return null
  return (
    <Portal>
      <>
        <Overlay onHandleOverlayClick={closeFlyout}/>
        <Wrapper>
          <button onClick={closeFlyout}>
            X
          </button>
        </Wrapper>
      </>
    </Portal>
  )
}

const Wrapper = styled.div`
  height: 100%;
  max-width: 450px;
  width: 33%;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
`
