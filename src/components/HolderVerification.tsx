import { useOrdConnect } from '@ordzaar/ord-connect'
import { original } from '@reduxjs/toolkit'
import axios from 'axios'
import { useState } from 'react'
import { inscriptionIdToInkIdMap } from '../app/data/inscriptionIdToInkIdMap'

type HiroApiListOfInscriptionsResponse = {
  limit: number
  offset: number
  total: number
  results: HiroApiInscription[]
}

type HiroApiInscription = {
  id: string
  number: number
  address: string
  genesis_address: string
  genesis_block_height: number
  genesis_block_hash: string
  genesis_tx_id: string
  genesis_fee: string
  genesis_timestamp: number
  tx_id: string
  location: string
  output: string
  value: string
  offset: string
  sat_ordinal: string
  sat_rarity: string
  sat_coinbase_height: number
  mime_type: string
  content_type: string
  content_length: number
  timestamp: number
  curse_type: string
  recursive: boolean
  recursion_refs: string[]
}

const HolderVerification = () => {
  const { address } = useOrdConnect()

  const [isHolder, setIsHolder] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const callApi = async () => {
    const from = 66120395
    const to = 66151960

    if (address && address.ordinals) {
      setIsLoading(true)
      const resp = await axios.get(
        `https://api.hiro.so/ordinals/v1/inscriptions?from_number=${from}&to_number=${to}&address=${address.ordinals}&limit=60`,
        {
          headers: {
            Accept: 'application/json',
          },
        },
      )

      const data = resp.data as HiroApiListOfInscriptionsResponse

      for (const ord of data.results) {
        if (inscriptionIdToInkIdMap[ord.id]) {
          setIsHolder(true)
          break
        }
      }

      setIsLoading(false)
    }
  }

  return (
    <div className='mt-1'>
      <p>Loading status: {isLoading ? 'Loading...' : 'Not loading'}</p>
      <p>Is Holder: {isHolder ? 'Yes' : 'No'}</p>
      <p className='mb-3'>Click the check button to call the api and check if you are a holder of the Ink collection</p>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={callApi}>
        Call
      </button>
    </div>
  )
}

export default HolderVerification
