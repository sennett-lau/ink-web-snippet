import { useOrdConnect, useSignMessage } from '@ordzaar/ord-connect'
import { useState } from 'react'

const SignMessageHookSample = () => {
  const { address } = useOrdConnect()
  const { signMsg } = useSignMessage()

  const [signature, setSignature] = useState<string>('')

  const message = 'Hello World'

  const handleSignMessage = async () => {
    const signature = await signMsg(address.ordinals, message)

    console.log(signature)
  }

  return (
    <div>
      <p className='mt-1 mb-3'>Signatures: {signature || 'null'}</p>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={handleSignMessage}
      >
        Sign Message
      </button>
    </div>
  )
}

export default SignMessageHookSample
