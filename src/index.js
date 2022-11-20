import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  lightTheme,
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { BrowserRouter } from "react-router-dom";

const wallabyChain: Chain = {
  id: 31415,
  name: "Wallaby Testnet",
  network: "wallaby",
  nativeCurrency: {
    decimals: 18,
    name: "tFIL",
    symbol: "tFIL",
  },
  rpcUrls: {
    default: "https://wallaby.node.glif.io/rpc/v0",
  },
  blockExplorers: {
    default: { name: "filecoin", url: "https://wallaby.filscan.io" },
  },
  testnet: true,
};

const { chains, provider } = configureChains(
  // [chain.polygonMumbai, chain.mainnet, wallabyChain],
  [wallabyChain],
  [
    jsonRpcProvider({
      rpc: () => ({
        http: "https://matic-testnet-archive-rpc.bwarelabs.com",
      }),
    }),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "Minted",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <WagmiConfig client={wagmiClient}>
    <RainbowKitProvider
      chains={chains}
      coolMode
      theme={lightTheme({
        accentColor: "#ff2c2c",
        accentColorForeground: "white",
        borderRadius: "medium",
        fontStack: "system",
      })}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RainbowKitProvider>
  </WagmiConfig>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
