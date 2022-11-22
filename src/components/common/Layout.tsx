import React, { useState } from 'react'
import Header from './Header/Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Modal from './Modal'
import styled from 'styled-components'
import Button from '../UI/Button'
import { ButtonMode, ButtonSize } from '../../ts/enums/UI/Button'
import { Flyout } from './Flyout'

const Layout = (): JSX.Element => {
  const [modalState, setModalState] = useState<boolean>(false)
  const [flyoutState, setFlyoutState] = useState<boolean>(false)

  return (
    <Wrapper>
      <Header
        setModalState={setModalState}
        setFlyoutState={setFlyoutState}
      />
        <Flyout
          isOpen={flyoutState}
          closeFlyout={() => {
            setFlyoutState(false)
          }}
        >

        </Flyout>
      <Main>
        <Outlet />
      </Main>
      <Footer />
      <Modal
        isOpen={modalState}
        closePopup={() => {
          setModalState(false)
        }}
      >
        <Button
          size={ButtonSize.lg}
          mode={ButtonMode.blue}>
          <p>lol</p>
        </Button>
      </Modal>
    </Wrapper>
  )
}

export default Layout

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 100%;
`

const Main = styled.main`
  flex: 1 1 100%;
`
