# `emtia-web3-react` Documentation - Trezor

- [Install](#install)
- [Arguments](#arguments)
- [Example](#example)

## Install
`yarn add @emtia-web3-react/trezor-connector`

## Arguments
```typescript
chainId: number
url: string
pollingInterval?: number
requestTimeoutMs?: number
config?: any
manifestEmail: string
manifestAppUrl: string
```

## Example
```javascript
import { TrezorConnector } from '@emtia-web3-react/trezor-connector'

const trezor = new TrezorConnector({ chainId: 1, url: '...', manifestEmail: '...', manifestAppUrl: '...' })
```
