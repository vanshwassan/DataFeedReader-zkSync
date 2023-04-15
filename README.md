# DataFeedReader on zkSync Era Testnet

> This is a simple example of how to deploy a DataFeedReader contract and read the datafeed value on zkSync Era Testnet.

## Installation

- To install all the packages:

```bash
$ yarn
```

- Make a `.env` file similar to `example.env` and add your private key:

```bash
$ echo 'PRIVATE_KEY=' > .env
```

- To compile and deploy the DataFeedReader contract:

```bash
$ yarn compile
```

```bash
$ yarn deploy
```

- To read the datafeed value:

```bash
$ yarn readDapi
```