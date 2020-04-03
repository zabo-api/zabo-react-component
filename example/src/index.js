import React from 'react'
import ReactDOM from 'react-dom'
import ZaboComponent from 'zabo-react-component'

let CLIENT_ID
do CLIENT_ID = window.prompt('Enter your Zabo Client ID:')
while (!CLIENT_ID)

ReactDOM.render(
  <ZaboComponent
    clientId={CLIENT_ID}
    env='sandbox'
    onInit={team => console.log('Team', team)}
    onError={err => console.log('Error', err)}
    onConnect={(account, zaboInstance) => {
      console.log('Account', account)
      zaboInstance.transactions.getList()
        .then(resp => console.log('Transactions List', resp))
    }}
  />,
  document.getElementById('root')
)
