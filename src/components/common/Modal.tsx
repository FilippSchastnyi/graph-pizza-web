import styled from 'styled-components'
import React from 'react'
import { IModal } from '../../ts/interfaces/UI_interfaces'
import { Portal } from '../UI/Portal'
import { Overlay } from './Overlay'


const Modal = ({ isOpen, children, closePopup }: IModal): JSX.Element | null => {
  if (!isOpen) return null


  return (
    <Portal>
      <>
        <Overlay onHandleOverlayClick={closePopup}/>
        <Wrapper>
          {children}
          <button onClick={closePopup}>
            close
          </button>
        </Wrapper>
      </>
    </Portal>
  )
}

export default Modal

const Wrapper = styled.div`
  padding: 20px;
  position: fixed;
  background-color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  border-radius: 10px;
`
