import { MESSAGE_TYPE } from '../../enums'

/**
 * This RPC method
 */

const getProviderState = {
  methodName: MESSAGE_TYPE.GET_PROVIDER_STATE,
  implementation: getProviderStateHandler,
}
export default getProviderState

/**
 * @typedef {Object} GetProviderStateResult
 * @property {string} chainId - The current chain ID.
 * @property {boolean} isUnlocked - Whether the extension is unlocked or not.
 * @property {string} networkVersion - The current network ID.
 */

/**
 * @typedef {Object} GetProviderStateOptions
 * @property {() => GetProviderStateResult} getProviderState - A function that gets the current
 * provider state.
 */

/**
 * @param {import('json-rpc-engine').JsonRpcRequest<[]>} req - The JSON-RPC request object.
 * @param {import('json-rpc-engine').JsonRpcResponse<GetProviderStateResult>} res - The JSON-RPC response object.
 * @param {Function} _next - The json-rpc-engine 'next' callback.
 * @param {Function} end - The json-rpc-engine 'end' callback.
 * @param {GetProviderStateOptions} options
 */
async function getProviderStateHandler (
  _req, res, _next, end,
  { getProviderState: _getProviderState },
) {
  res.result = {
    ..._getProviderState(),
  }
  return end()
}
