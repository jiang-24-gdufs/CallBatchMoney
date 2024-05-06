const ethers = require('ethers');
const privateKey = require('./.env/pk.js').privateKey;
const ABI = require('./ABI.js').ABI;
async function sendEther() {
  // 以太坊网络的提供商，这里我们使用Infura
  const provider = new ethers.JsonRpcProvider('https://sepolia.infura.io/v3/323060e943354bdd86db6fb57d1614db');

  // 创建一个钱包对象，它将用于签名交易
  const wallet = new ethers.Wallet(privateKey, provider);

  // 合约的地址和ABI
  const contractAddress = '0x800A2bE9B6259E252eDE4a5a041C23ab994F2962';
  const contractAbi = ABI;

  // 创建一个合约实例
  const contract = new ethers.Contract(contractAddress, contractAbi, wallet);
  // 设置 gas 价格，单位是 gwei
  const gasPrice = ethers.parseUnits('150', 'gwei');
  // 调用合约的某个方法
  const addressList = [
    '0x40f4B71a599851a4b5f28913F5F7aAD96cc7C704'.toLocaleLowerCase(),
    '0x40f4B71a599851a4b5f28913F5F7aAD96cc7C705'.toLocaleLowerCase(),
    '0x40f4B71a599851a4b5f28913F5F7aAD96cc7C706'.toLocaleLowerCase(),
    '0x40f4B71a599851a4b5f28913F5F7aAD96cc7C707'.toLocaleLowerCase(),
    '0x40f4B71a599851a4b5f28913F5F7aAD96cc7C708'.toLocaleLowerCase(),
    '0x40f4B71a599851a4b5f28913F5F7aAD96cc7C709'.toLocaleLowerCase(),
  ]
  const valueList = [
    ethers.parseEther('0.00000001'),
    ethers.parseEther('0.000002'),
    ethers.parseEther('0.0000003'),
    ethers.parseEther('0.00000001'),
    ethers.parseEther('0.000002'),
    ethers.parseEther('0.0000003'),
  ]
  const result = await contract.batchTransferETH(addressList, valueList, { gasPrice: gasPrice });

  console.log(result);

  // 等待交易被矿工确认
  const receipt = await result.wait();
  console.log(`Transaction was confirmed in block ${receipt.blockNumber}`);
}

sendEther().catch(console.error);
