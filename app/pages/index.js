import Header from "../components/Header";
import PotCard from "../components/PotCard";
import Table from "../components/Table";
import style from "../styles/Home.module.css";

// Wallet connection provider 
import { useMemo } from "react";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets"
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { AppProvider } from "../context/context";
require("@solana/wallet-adapter-react-ui/styles.css"); //Sol styling

export default function Home() {

  // First we will define the endpoint for RPC Node
  // Endpoint in localnet
  const endpoint = "http://127.0.0.1:8899/";

  //Hook to create my wallet adapter
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter()
    ],
    []
  )



  return (
  <ConnectionProvider endpoint={endpoint}>
    <WalletProvider wallets={wallets} autoConnect>
      <WalletModalProvider>
        <AppProvider>
          <div className={style.wrapper}>
           <Header />
           <PotCard />
           <Table />
          </div>
        </AppProvider>
      </WalletModalProvider>
    </WalletProvider>
  </ConnectionProvider>
  );
}
