import React from 'react';
import { DataProvider } from './Context/Data.context';
import Layout
 from './Layout/Layout';
 import Mainpage from './Pages/MainPage';

 const App = ()=>{
  return(
    <DataProvider>
    <Layout>
      <Mainpage />
    </Layout>
    </DataProvider>
  );
 };

 export default App;