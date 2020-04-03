import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Zabo from 'zabo-sdk-js'

import styles from './styles.css'

export default class ZaboComponent extends Component {
  static propTypes = {
    clientId: PropTypes.string.isRequired,
    env: PropTypes.oneOf(['sandbox', 'live']),
    onInit: PropTypes.func,
    onConnect: PropTypes.func,
    onError: PropTypes.func
  }

  // HANDLERS
  onInit = this.onInit.bind(this)
  onConnect = this.onConnect.bind(this)
  onError = this.onError.bind(this)
  connect = this.connect.bind(this)

  onInit (zabo) {
    const { onInit } = this.props
    if (onInit) onInit(zabo.data, zabo)
  }

  onConnect (account) {
    const { onConnect } = this.props
    if (onConnect) onConnect(account, Zabo.instance)
  }

  onError (err) {
    const { onError } = this.props
    if (onError) onError(err)
  }

  connect () {
    if (Zabo.instance) {
      Zabo.instance.connect()
        .onConnection(this.onConnect)
        .onError(this.onError)
    }
  }

  componentWillMount () {
    const { clientId, env } = this.props

    Zabo.init({
      clientId: clientId,
      env: env || 'sandbox'
    })
      .then(this.onInit)
      .catch(this.onError)
  }

  render() {
    const { children } = this.props

    return (
      <div onClick={this.connect}>
        {
          children ||
          <button className={styles.zaboButton}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 170">
              <path d="M128.94,110.68L35.26,170.4H200l-35-59.72H128.94Zm70.81-48.13H71.06L0,107.85l35,59.72,93.67-59.72ZM71.06,59.72H200L165,0H0.25l35,59.72h35.8Z"/>
            </svg>
            <span>CONNECT YOUR WALLET</span>
          </button>
        }
      </div>
    )
  }
}
