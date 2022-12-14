import { GlobalStyle } from './styles/globalStyles'
import AppRoutes from './Routes'

function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <AppRoutes
        isAuthorized={false}
      />
    </>
  )
}

export default App
