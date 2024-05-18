const ethers = require('ethers');
const privateKey = require('./.env/pk.js').privateKey;
const key = require('./.env/infura.js').key;
const ABI = require('./ABI.js').ABI;
const { recipients, amounts } = require('./recipients.js');
async function sendEther() {
  // 以太坊网络的提供商，这里我们使用Infura
  const provider = new ethers.JsonRpcProvider('https://linea-mainnet.infura.io/v3/'+key);

  // 创建一个钱包对象，它将用于签名交易
  const wallet = new ethers.Wallet(privateKey, provider);

  // 合约的地址和ABI
  const contractAddress = '0x1b285Ffd0B19805947E7F285A922d2fFe5c4FE4d';
  const contractAbi = ABI;

  // 创建一个合约实例
  const contract = new ethers.Contract(contractAddress, contractAbi, wallet);
  // 设置 gas 价格，单位是 gwei
  // const gasPrice = ethers.parseUnits('255', 'gwei');
  // 调用合约的某个方法
  const addressList = recipients.map((address) => address.toLocaleLowerCase());
  const valueList = amounts.map((amount) => ethers.parseEther(amount));
  const total = amounts.reduce((a, b) => +a+ +b, 0);
  console.log(addressList, valueList, total)
  
  // const result = await contract.batchTransferETH.estimateGas(addressList, valueList, { value:  ethers.parseEther(total.toString()) });
  const result = await contract.batchTransferETH(addressList, valueList, { value:  ethers.parseEther(total.toString()) });
  console.log(result);

  // 等待交易被矿工确认
  // const receipt = await result.wait();
  // console.log(`Transaction was confirmed in block ${receipt.blockNumber}`);
}

sendEther().catch(console.error);
