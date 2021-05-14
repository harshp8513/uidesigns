import React from 'react';
import type { FC } from 'react';
import './App.css';
import { Head } from './components';
import { ChakraProvider } from "@chakra-ui/react"

const App: FC = () => {
  return (
    <ChakraProvider>
      <Head />
      <div className="_body">
        
      </div>
    </ChakraProvider>
  );
}

export default App;
