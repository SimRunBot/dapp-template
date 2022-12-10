import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { useEffect, useState } from "react";
//import address from "../addresses/Address";
//import abi from "../abi/Abi";
export default function Home() {
  const [mounted, setMounted] = useState(false);

  const { address, isConnected } = useAccount({
    onConnect({ address, connector, isReconnected }) {
      //
    },
    onDisconnect() {
      //
    },
  });
  // prevents hydration error
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <div className={styles.container}>
      <Head>
        <title>Web3 dapp</title>
        <meta name="description" content="Web3 dapp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Hello world</div>
      <ConnectButton accountStatus="address" />
      {isConnected ? <div>{address}</div> : ""}
    </div>
  );
}
