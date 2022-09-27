import styled from 'styled-components'
import React from 'react'
import ReactDOM from 'react-dom'

interface IModalProps {
  isOpen: boolean;
  children: JSX.Element;
  onHandleClickCloseButton: () => void;
}


const Modal = ({ isOpen, children, onHandleClickCloseButton }: IModalProps): JSX.Element | null => {
  if (!isOpen) return null


  return ReactDOM.createPortal(
    <>
      <Overlay />
      <Wrapper>
        {children} Modaaal
        <button onClick={onHandleClickCloseButton}>
          close
        </button>
      </Wrapper>
    </>,
    document.getElementById('portal') as HTMLElement
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
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: 0.7;
`
