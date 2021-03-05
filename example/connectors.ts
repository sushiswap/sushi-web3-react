import { InjectedConnector } from '@sushi-web3-react/injected-connector'
import { NetworkConnector } from '@sushi-web3-react/network-connector'
import { WalletConnectConnector } from '@sushi-web3-react/walletconnect-connector'
import { WalletLinkConnector } from '@sushi-web3-react/walletlink-connector'
import { LedgerConnector } from '@sushi-web3-react/ledger-connector'
import { TrezorConnector } from '@sushi-web3-react/trezor-connector'
import { FrameConnector } from '@sushi-web3-react/frame-connector'
import { AuthereumConnector } from '@sushi-web3-react/authereum-connector'
import { FortmaticConnector } from '@sushi-web3-react/fortmatic-connector'
import { MagicConnector } from '@sushi-web3-react/magic-connector'
import { PortisConnector } from '@sushi-web3-react/portis-connector'
import { SquarelinkConnector } from '@sushi-web3-react/squarelink-connector'
import { TorusConnector } from '@sushi-web3-react/torus-connector'
import { LatticeConnector } from '@sushi-web3-react/lattice-connector'
import { Coin98Connector } from '../packages/coin98-connector'

const POLLING_INTERVAL = 12000
const RPC_URLS: { [chainId: number]: string } = {
  1: process.env.RPC_URL_1 as string,
  4: process.env.RPC_URL_4 as string
}

export const injected = new InjectedConnector({ supportedChainIds: [1, 3, 4, 5, 42] })

export const coin98 = new Coin98Connector({ supportedChainIds: [1, 3, 4, 5, 42] })

export const network = new NetworkConnector({
  urls: { 1: RPC_URLS[1], 4: RPC_URLS[4] },
  defaultChainId: 1
})

export const walletconnect = new WalletConnectConnector({
  rpc: { 1: RPC_URLS[1] },
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
  pollingInterval: POLLING_INTERVAL
})

export const walletlink = new WalletLinkConnector({
  url: RPC_URLS[1],
  appName: 'sushi-web3-react example'
})

export const ledger = new LedgerConnector({ chainId: 1, url: RPC_URLS[1], pollingInterval: POLLING_INTERVAL })

export const trezor = new TrezorConnector({
  chainId: 1,
  url: RPC_URLS[1],
  pollingInterval: POLLING_INTERVAL,
  manifestEmail: 'dummy@abc.xyz',
  manifestAppUrl: 'http://localhost:1234'
})

export const lattice = new LatticeConnector({
  chainId: 4,
  appName: 'web3-react',
  url: RPC_URLS[4],
})

export const frame = new FrameConnector({ supportedChainIds: [1] })

export const authereum = new AuthereumConnector({ chainId: 42 })

export const fortmatic = new FortmaticConnector({ apiKey: process.env.FORTMATIC_API_KEY as string, chainId: 4 })

export const magic = new MagicConnector({
  apiKey: process.env.MAGIC_API_KEY as string,
  chainId: 4,
  email: 'hello@example.org'
})

export const portis = new PortisConnector({ dAppId: process.env.PORTIS_DAPP_ID as string, networks: [1, 100] })

export const squarelink = new SquarelinkConnector({
  clientId: process.env.SQUARELINK_CLIENT_ID as string,
  networks: [1, 100]
})

export const torus = new TorusConnector({ chainId: 1 })
