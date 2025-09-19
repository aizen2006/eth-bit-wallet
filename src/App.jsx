import { useState } from 'react'
import './App.css'
import { generateMnemonic } from "bip39";
import { EthWallet } from './component/ETHWallet';
import { SolanaWallet } from './component/SolanaWallet';


function App() {
  const [count, setCount] = useState(0)
  const [mnemonic, setMnemonic] = useState("");

  return (
    <>
    <button onClick={async function() {
      const mn = await generateMnemonic();
      setMnemonic(mn)
    }}>
      Create Seed Phrase
    </button>
    <input type="text" value={mnemonic}></input>
    <EthWallet mnemonic={mnemonic} />
    <SolanaWallet mnemonic={mnemonic} />
    </>
    
  )
}

export default App
