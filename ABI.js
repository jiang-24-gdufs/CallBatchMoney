const ABI = [
  {
    "constant": false,
    "inputs": [
      {
        "name": "token",
        "type": "address"
      },
      {
        "name": "total",
        "type": "uint256"
      },
      {
        "name": "recipients",
        "type": "address[]"
      },
      {
        "name": "amounts",
        "type": "uint256[]"
      }
    ],
    "name": "batchTransferERC20",
    "outputs": [],
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "recipients",
        "type": "address[]"
      },
      {
        "name": "amounts",
        "type": "uint256[]"
      }
    ],
    "name": "batchTransferETH",
    "outputs": [],
    "type": "function",
    "payable": true
  }
]
module.exports = {
  ABI: ABI
}