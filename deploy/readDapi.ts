import { Deployer } from "@matterlabs/hardhat-zksync-deploy";
import * as dotenv from "dotenv";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { ContractFactory, Wallet } from "zksync-web3";

require('dotenv').config()

const readDapi = async (hre: HardhatRuntimeEnvironment) => {

  const DapiReaderContractAddress = "0xD67C8cda3c0Be93b5e28783dbC9d806A81ca46ED";
  if (!DapiReaderContractAddress) {
    throw new Error(`Contract address not provided. Use the contractAddress variable to set it.`);
  }

  // private key from env var
  const privateKey = process.env.PRIVATE_KEY;

  const wallet = new Wallet(privateKey);
  const deployer = new Deployer(hre, wallet);
  const artifact = await deployer.loadArtifact("DataFeedReaderExample");

  const DataFeedReaderFactory = new ContractFactory(artifact.abi, artifact.bytecode, deployer.zkWallet);
  const DataFeedReaderContract = DataFeedReaderFactory.attach(DapiReaderContractAddress);
  console.log();

  // readDataFeed function call (READ)
  console.log(`Calling the readDataFeed function...`)
  const readDataFeed = await DataFeedReaderContract.readDataFeed();
  console.log(`Function responded with(value and timestamp): ${readDataFeed}`);
  console.log();
}

export default readDapi;
