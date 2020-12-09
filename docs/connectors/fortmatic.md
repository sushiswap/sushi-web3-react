# `emtia-web3-react` Documentation - Fortmatic

- [Install](#install)
- [Arguments](#arguments)
- [Example](#example)

## Install
`yarn add @emtia-web3-react/fortmatic-connector`

## Arguments
```typescript
apiKey: string
chainId: number
```

## Example
```javascript
import { FortmaticConnector } from '@emtia-web3-react/fortmatic-connector'

const fortmatic = new FortmaticConnector({ apiKey: '...', chainId: 4 })
```

Note: Once the connector has been activated, the Fortmatic SDK instance can be accessed under the `.fortmatic` property.
