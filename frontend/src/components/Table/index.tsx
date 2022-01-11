import React, { useState, useEffect } from 'react'
import MUIDataTable from 'mui-datatables'
import { httpVideo } from '../../utils/http'
import { columnsMap } from './ColumnsDefinitions'

interface TableProps {
  type: 'categories' | 'genres' | 'cast_members'
}

export const Table = ({ type }: TableProps) => {
  const [data, setData] = useState([])

  const columnsDefinition = columnsMap[type]

  useEffect(() => {
    httpVideo.get(`/${type}`).then((response) => {
      setData(response.data.data)
    })
  })

  return <MUIDataTable title="" columns={columnsDefinition} data={data} />
}
