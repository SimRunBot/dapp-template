import "../styles/globals.css";

import "@rainbow-me/rainbowkit/styles.css";

import {
  getDefaultWallets,
  RainbowKitProvider,
  lightTheme,
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { infuraProvider } from "wagmi/providers/infura";
import { publicProvider } from "wagmi/providers/public";

// chains & provider
const { chains, provider } = configureChains(
  [chain.mainnet, chain.goerli],
  [
    infuraProvider({ apiKey: process.env.NEXT_PUBLIC_InfuraApiKey }),
    publicProvider(),
  ]
);
// rainbowkit
const { connectors } = getDefaultWallets({
  appName: "Web3 dapp",
  chains,
});
// wagmi
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        chains={chains}
        modalSize="compact"
        theme={lightTheme({
          accentColor: "#e90808",
          accentColorForeground: "white",
        })}
      >
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
