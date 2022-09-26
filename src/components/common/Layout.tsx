import React, { useState } from 'react'
import Header from './Header/Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Modal from './Modal'
import styled from 'styled-components'

const Layout = (): JSX.Element => {
  const [modalState, setModalState] = useState<boolean>(false)
  return (
    <Wrapper>
      <Header
        setModalState={setModalState}
      />
      <Main>
        <Outlet />
      </Main>
      <Footer />
      <Modal
        isOpen={modalState}
        onHandleClickCloseButton={() => {
          setModalState(false)
        }}
      >
        <p>heeey</p>
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
