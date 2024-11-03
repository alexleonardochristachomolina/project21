import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router} from 'react-router-dom';
import { ThirdwebProvider, metamaskWallet } from '@thirdweb-dev/react';
import { Sepolia } from "@thirdweb-dev/chains";
import { StateContextProvider } from './Context';

import App from './App';
import  './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ThirdwebProvider activeChain={Sepolia} clientId={process.env.CLIENT_ID} supportedWallets={[metamaskWallet]}>
        <Router>
            <StateContextProvider>
            <App />
            </StateContextProvider>
        </Router>

    </ThirdwebProvider>
)

