a = eth.accounts[0]
web3.eth.defaultAccount = a;

// abi and bytecode generated from simplestorage.sol:
// > solcjs --bin --abi simplestorage.sol
var abi = [
        {
            "constant": true,
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "spender",
                    "type": "address"
                },
                {
                    "name": "tokens",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [
                {
                    "name": "success",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_addr",
                    "type": "address"
                }
            ],
            "name": "isContract",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "totalSupply",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "from",
                    "type": "address"
                },
                {
                    "name": "to",
                    "type": "address"
                },
                {
                    "name": "tokens",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [
                {
                    "name": "success",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "destruct",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "decimals",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "_totalSupply",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "tokenOwner",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "name": "balance",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "id",
                    "type": "uint256"
                },
                {
                    "name": "url",
                    "type": "string"
                }
            ],
            "name": "setScript",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "acceptOwnership",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "symbol",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "a",
                    "type": "uint256"
                },
                {
                    "name": "b",
                    "type": "uint256"
                }
            ],
            "name": "safeSub",
            "outputs": [
                {
                    "name": "c",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "to",
                    "type": "address"
                },
                {
                    "name": "tokens",
                    "type": "uint256"
                }
            ],
            "name": "transfer",
            "outputs": [
                {
                    "name": "success",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "a",
                    "type": "uint256"
                },
                {
                    "name": "b",
                    "type": "uint256"
                }
            ],
            "name": "safeDiv",
            "outputs": [
                {
                    "name": "c",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "spender",
                    "type": "address"
                },
                {
                    "name": "tokens",
                    "type": "uint256"
                },
                {
                    "name": "data",
                    "type": "bytes"
                }
            ],
            "name": "approveAndCall",
            "outputs": [
                {
                    "name": "success",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "a",
                    "type": "uint256"
                },
                {
                    "name": "b",
                    "type": "uint256"
                }
            ],
            "name": "safeMul",
            "outputs": [
                {
                    "name": "c",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "newOwner",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "tokenAddress",
                    "type": "address"
                },
                {
                    "name": "tokens",
                    "type": "uint256"
                }
            ],
            "name": "transferAnyERC20Token",
            "outputs": [
                {
                    "name": "success",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "tokenOwner",
                    "type": "address"
                },
                {
                    "name": "spender",
                    "type": "address"
                }
            ],
            "name": "allowance",
            "outputs": [
                {
                    "name": "remaining",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "a",
                    "type": "uint256"
                },
                {
                    "name": "b",
                    "type": "uint256"
                }
            ],
            "name": "safeAdd",
            "outputs": [
                {
                    "name": "c",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "id",
                    "type": "uint256"
                }
            ],
            "name": "getScript",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "name": "_symbol",
                    "type": "string"
                },
                {
                    "name": "_name",
                    "type": "string"
                },
                {
                    "name": "_decimals",
                    "type": "uint256"
                },
                {
                    "name": "totalSupply",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "payable": true,
            "stateMutability": "payable",
            "type": "fallback"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "_from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "_to",
                    "type": "address"
                }
            ],
            "name": "OwnershipTransferred",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "tokens",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "tokenOwner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "spender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "tokens",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        }
    ];

var bytecode = "0x60806040523480156200001157600080fd5b506040516200257638038062002576833981018060405260808110156200003757600080fd5b8101908080516401000000008111156200005057600080fd5b828101905060208101848111156200006757600080fd5b81518560018202830111640100000000821117156200008557600080fd5b50509291906020018051640100000000811115620000a257600080fd5b82810190506020810184811115620000b957600080fd5b8151856001820283011164010000000082111715620000d757600080fd5b50509291906020018051906020019092919080519060200190929190505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083600290805190602001906200014e92919062000235565b5082600390805190602001906200016792919062000235565b5081600481905550600454600a0a8102600581905550600554600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055503373ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef6005546040518082815260200191505060405180910390a350505050620002e4565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200027857805160ff1916838001178555620002a9565b82800160010185558215620002a9579182015b82811115620002a85782518255916020019190600101906200028b565b5b509050620002b89190620002bc565b5090565b620002e191905b80821115620002dd576000816000905550600101620002c3565b5090565b90565b61228280620002f46000396000f3fe608060405260043610610138576000357c01000000000000000000000000000000000000000000000000000000009004806306fdde031461013d578063095ea7b3146101cd578063162790551461024057806318160ddd146102a957806323b872dd146102d45780632b68b9c614610367578063313ce5671461037e5780633eaaf86b146103a957806370a08231146103d457806371199d301461043957806379ba50971461050b5780638da5cb5b1461052257806395d89b4114610579578063a293d1e814610609578063a9059cbb14610662578063b5931f7c146106d5578063cae9ca511461072e578063d05c78da14610838578063d4ee1d9014610891578063dc39d06d146108e8578063dd62ed3e1461095b578063e6cb9013146109e0578063ea146e5114610a39578063f2fde38b14610aed575b600080fd5b34801561014957600080fd5b50610152610b3e565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610192578082015181840152602081019050610177565b50505050905090810190601f1680156101bf5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101d957600080fd5b50610226600480360360408110156101f057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610bdc565b604051808215151515815260200191505060405180910390f35b34801561024c57600080fd5b5061028f6004803603602081101561026357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610e88565b604051808215151515815260200191505060405180910390f35b3480156102b557600080fd5b506102be610ea1565b6040518082815260200191505060405180910390f35b3480156102e057600080fd5b5061034d600480360360608110156102f757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610eec565b604051808215151515815260200191505060405180910390f35b34801561037357600080fd5b5061037c611404565b005b34801561038a57600080fd5b50610393611478565b6040518082815260200191505060405180910390f35b3480156103b557600080fd5b506103be61147e565b6040518082815260200191505060405180910390f35b3480156103e057600080fd5b50610423600480360360208110156103f757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611484565b6040518082815260200191505060405180910390f35b34801561044557600080fd5b506105096004803603604081101561045c57600080fd5b81019080803590602001909291908035906020019064010000000081111561048357600080fd5b82018360208201111561049557600080fd5b803590602001918460018302840111640100000000831117156104b757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506114cd565b005b34801561051757600080fd5b506105206114f9565b005b34801561052e57600080fd5b50610537611698565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561058557600080fd5b5061058e6116bd565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156105ce5780820151818401526020810190506105b3565b50505050905090810190601f1680156105fb5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561061557600080fd5b5061064c6004803603604081101561062c57600080fd5b81019080803590602001909291908035906020019092919050505061175b565b6040518082815260200191505060405180910390f35b34801561066e57600080fd5b506106bb6004803603604081101561068557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506117e0565b604051808215151515815260200191505060405180910390f35b3480156106e157600080fd5b50610718600480360360408110156106f857600080fd5b810190808035906020019092919080359060200190929190505050611b23565b6040518082815260200191505060405180910390f35b34801561073a57600080fd5b5061081e6004803603606081101561075157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561079857600080fd5b8201836020820111156107aa57600080fd5b803590602001918460018302840111640100000000831117156107cc57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611b47565b604051808215151515815260200191505060405180910390f35b34801561084457600080fd5b5061087b6004803603604081101561085b57600080fd5b810190808035906020019092919080359060200190929190505050611d96565b6040518082815260200191505060405180910390f35b34801561089d57600080fd5b506108a6611dc7565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156108f457600080fd5b506109416004803603604081101561090b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611ded565b604051808215151515815260200191505060405180910390f35b34801561096757600080fd5b506109ca6004803603604081101561097e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611f51565b6040518082815260200191505060405180910390f35b3480156109ec57600080fd5b50610a2360048036036040811015610a0357600080fd5b810190808035906020019092919080359060200190929190505050611fd8565b6040518082815260200191505060405180910390f35b348015610a4557600080fd5b50610a7260048036036020811015610a5c57600080fd5b810190808035906020019092919050505061205d565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610ab2578082015181840152602081019050610a97565b50505050905090810190601f168015610adf5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b348015610af957600080fd5b50610b3c60048036036020811015610b1057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050612112565b005b60038054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610bd45780601f10610ba957610100808354040283529160200191610bd4565b820191906000526020600020905b815481529060010190602001808311610bb757829003601f168201915b505050505081565b600081600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410151515610cbb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001807f53656e64657220646f65736e2774206861766520656e6f75676820746f6b656e81526020017f730000000000000000000000000000000000000000000000000000000000000081525060400191505060405180910390fd5b610cc483610e88565b158015610cfe5750600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b1515610d98576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260358152602001807f546f20616464726573732063616e6e6f7420626520636f6e747261637420616481526020017f6472657373206f72207a65726f2061646472657373000000000000000000000081525060400191505060405180910390fd5b81600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b600080823b905060008163ffffffff1611915050919050565b6000600660008073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205460055403905090565b600081600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410151515610fa5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f46726f6d20646f65736e2774206861766520656e6f75676820746f6b656e730081525060200191505060405180910390fd5b81600760008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410151515611099576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f596f7520617265206e6f7420617070726f76656420746f6b656e73000000000081525060200191505060405180910390fd5b6110a283610e88565b1580156110dc5750600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b1515611176576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260358152602001807f546f20616464726573732063616e6e6f7420626520636f6e747261637420616481526020017f6472657373206f72207a65726f2061646472657373000000000000000000000081525060400191505060405180910390fd5b6111bf600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548361175b565b600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611288600760008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548361175b565b600760008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611351600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205483611fd8565b600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561145f57600080fd5b3373ffffffffffffffffffffffffffffffffffffffff16ff5b60045481565b60055481565b6000600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b806008600084815260200190815260200160002090805190602001906114f49291906121b1565b505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561155557600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60028054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156117535780601f1061172857610100808354040283529160200191611753565b820191906000526020600020905b81548152906001019060200180831161173657829003601f168201915b505050505081565b60008282111515156117d5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f5375627472616374696f6e206661696c6564000000000000000000000000000081525060200191505060405180910390fd5b818303905092915050565b600081600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101515156118bf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001807f53656e64657220646f65736e2774206861766520656e6f75676820746f6b656e81526020017f730000000000000000000000000000000000000000000000000000000000000081525060400191505060405180910390fd5b6118c883610e88565b1580156119025750600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b151561199c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260358152602001807f546f20616464726573732063616e6e6f7420626520636f6e747261637420616481526020017f6472657373206f72207a65726f2061646472657373000000000000000000000081525060400191505060405180910390fd5b6119e5600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548361175b565b600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611a71600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205483611fd8565b600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b60008082111515611b3357600080fd5b8183811515611b3e57fe5b04905092915050565b600082600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925856040518082815260200191505060405180910390a38373ffffffffffffffffffffffffffffffffffffffff16638f4ffcb1338530866040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611d24578082015181840152602081019050611d09565b50505050905090810190601f168015611d515780820380516001836020036101000a031916815260200191505b5095505050505050600060405180830381600087803b158015611d7357600080fd5b505af1158015611d87573d6000803e3d6000fd5b50505050600190509392505050565b600081830290506000831480611db65750818382811515611db357fe5b04145b1515611dc157600080fd5b92915050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515611e4a57600080fd5b8273ffffffffffffffffffffffffffffffffffffffff1663a9059cbb6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff16846040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b158015611f0e57600080fd5b505af1158015611f22573d6000803e3d6000fd5b505050506040513d6020811015611f3857600080fd5b8101908080519060200190929190505050905092915050565b6000600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60008183019050828110151515612057576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600f8152602001807f4164646974696f6e206661696c6564000000000000000000000000000000000081525060200191505060405180910390fd5b92915050565b6060600860008381526020019081526020016000208054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156121065780601f106120db57610100808354040283529160200191612106565b820191906000526020600020905b8154815290600101906020018083116120e957829003601f168201915b50505050509050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561216d57600080fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106121f257805160ff1916838001178555612220565b82800160010185558215612220579182015b8281111561221f578251825591602001919060010190612204565b5b50905061222d9190612231565b5090565b61225391905b8082111561224f576000816000905550600101612237565b5090565b9056fea165627a7a72305820bab72a85db3ac8c04983cf3c59fe3239f7980d86ba9df09a9842ce1bf0bf05a70029";


var simpleContract = web3.eth.contract(abi);
console.log(web3.eth.accounts);
var simple = simpleContract.new("QBG","QueenBee Gold", 18, 80000000, {from:web3.eth.accounts[0], data: bytecode, gas: 0x47b760}, function(e, contract) {
	if (e) {
		console.log("err creating contract", e);
	} else {
		if (!contract.address) {
			console.log("Contract transaction send: TransactionHash: " + contract.transactionHash + " waiting to be mined...");
		} else {
			console.log("Contract mined! Address: " + contract.address);
			console.log(contract);
		}
	}
});
