import { useOrdConnect } from '@ordzaar/ord-connect'

const OrdConnectHookSample = () => {
  const { address, disconnectWallet } = useOrdConnect()

  return (
    <div>
      <div className='mt-1 mb-3'>
        <p>address.ordinals: {address?.ordinals || 'null'}</p>
        <p>address.payments: {address?.payments || 'null'}</p>
      </div>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={disconnectWallet}
      >
        Disconnect
      </button>
    </div>
  )
}

export default OrdConnectHookSample
