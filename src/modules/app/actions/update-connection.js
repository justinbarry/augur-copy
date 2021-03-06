export const UPDATE_CONNECTION_STATUS = 'UPDATE_CONNECTION_STATUS'
export const UPDATE_AUGUR_NODE_CONNECTION_STATUS = 'UPDATE_AUGUR_NODE_CONNECTION_STATUS'
export const UPDATE_IS_RECONNECTION_PAUSED = 'UPDATE_IS_RECONNECTION_PAUSED'

/**
 * @param {Boolean} isConnected
 * @return {{type: string, isConnected: *}} returns action
 */
export function updateConnectionStatus(isConnected) {
  return {
    type: UPDATE_CONNECTION_STATUS,
    isConnected,
  }
}

/**
 * @param {Boolean} isConnected
 * @return {{type: string, isConnected: *}} returns action
 */
export function updateAugurNodeConnectionStatus(isConnected) {
  return {
    type: UPDATE_AUGUR_NODE_CONNECTION_STATUS,
    isConnected,
  }
}

/**
 * @param {Boolean} isReconnectionPaused
 * @return {{type: string, isReconnectionPaused: *}} returns action
 */
export function updateIsReconnectionPaused(isReconnectionPaused) {
  return {
    type: UPDATE_IS_RECONNECTION_PAUSED,
    isReconnectionPaused,
  }
}
