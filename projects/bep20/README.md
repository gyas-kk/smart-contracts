
# Token

## Deploying to a Network

You can deploy the smart contract to a network by running the deployment script with the network configuration:

```bash
yarn deploy:testnet
```
## Verifying on Etherscan

After deploying the contract, you can verify the contract on Etherscan by using the `hardhat-etherscan` plugin:

```bash
npx hardhat verify --network testnet $CONTRACT_ADDRESS '$CONSTRUCTOR_ARG'
```

Make sure to replace `$CONTRACT_ADDRESS` with the deployed contract address and `$CONSTRUCTOR_ARG` with the constructor argument. The argument must be enclosed in quotes.
