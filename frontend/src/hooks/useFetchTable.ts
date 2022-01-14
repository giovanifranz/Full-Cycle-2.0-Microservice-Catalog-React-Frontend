import { useEffect, useState } from 'react'
import { httpVideo } from '../utils/http'

type API = 'genres' | 'categories' | 'cast_members'

export function useFetchTable(api: API) {
  const [data, setData] = useState([])

  useEffect(() => {
    httpVideo.get(`/${api}`).then((response) => {
      setData(response.data.data)
    })
  })

  return data
}
