import React from 'react';
import Layout from "./components/common/Layout";
import { GlobalStyle } from './styles/globalStyles';

function App() {
  return (
    <>
      <GlobalStyle/>
      <Layout>
        <h1>
          hello
        </h1>
      </Layout>
    </>
  );
}

export default App;
