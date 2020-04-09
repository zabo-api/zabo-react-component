Zabo React Component
=========================

[![NPM](https://img.shields.io/npm/v/zabo-react-component.svg)](https://www.npmjs.com/package/zabo-react-component) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Join the chat at https://gitter.im/zabo-api/community](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/zabo-api/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge) [![Discord](https://img.shields.io/discord/533336922970521600)](https://discord.gg/vGHYuUT) [![Discourse](https://img.shields.io/discourse/https/forum.zabo.com/status)](https://forum.zabo.com)  

The Zabo React Component provides convenient access to the [Zabo API](https://zabo.com) from applications.
Please keep in mind that [you must register](https://zabo.com/login) and receive a team id to use in your application.

## Install

```bash
npm install --save zabo-react-component
```

## Usage

```jsx
import React, { Component } from 'react'

import Zabo from 'zabo-react-component'

class Example extends Component {
  render () {
    return (
      <Zabo
        clientId='YOUR_CLIENT_ID'
        env='sandbox'
        onInit={team => console.log('Team', team)}
        onError={err => console.log('Error', err)}
        onConnect={(account, zaboInstance) => {
          console.log('Account', account)

          zaboInstance.transactions.getList()
            .then(resp => console.log('Transactions List', resp))
        }}
      />
    )
  }
}
```

## Properties
| Name | Type | Description | Required |
| :---: | :---: | :---: | :---: |
| clientId | {string} | Key acquired when registering a team in Zabo Dashboard. | Required |
| env | {string} | Zabo API environment the SDK is connecting with. Could be either `sandbox` or `live`. Only sandbox is available unless a live connection is approved. Default: `sandbox`. | Optional |
| onInit | {function (appData[, zaboInstance])} | This function is called when the Zabo API is successfully initialized. The first argument is the team data object and the second argument is the Zabo SDK instance. | Optional |
| onConnect | {function (accountData[, zaboInstance])} | This function is called when the user has successfully authenticated and enabled their account for use by your application. The first argument is the account data object and the second argument is the Zabo SDK instance. | Optional |
| onError | {func} | This function is called when an error is triggered. | Optional |

**Note**: You can also access the Zabo instance via `window` by simply call `window.Zabo.instance`.

## Example

```bash
npm run example
```

## Documentation
See the [Zabo API docs](https://zabo.com/docs).

## Help and Further Information
Please [read our docs](https://zabo.com/docs) and reach out to us in any or all of the following forums for questions:

* [Discord](https://discord.gg/vGHYuUT)
* [Discourse](https://forum.zabo.com)
* [Gitter](https://gitter.im/zabo-api/community)
* [Email](mailto:contact@zabo.com)
