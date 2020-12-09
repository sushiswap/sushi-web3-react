# `emtia-web3-react` Documentation - Squarelink

- [Install](#install)
- [Arguments](#arguments)
- [Example](#example)

## Install
`yarn add @emtia-web3-react/squarelink-connector`

## Arguments
```typescript
clientId: string
networks: (number | { chainId: number; [key: string]: any })[]
options?: any
```

## Example
```javascript
import { SquarelinkConnector } from '@emtia-web3-react/squarelink-connector'

const squarelink = new SquarelinkConnector({
  clientId: '...',
  networks: [1, 100]
})
```

Note: Once the connector has been activated, the Squarelink SDK instance can be accessed under the `.squarelink` property.
