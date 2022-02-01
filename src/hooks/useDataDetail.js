import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default dataID => {
  const [dataDetail, setDataDetail] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  const loadDataDetail = async () => {
    try {
      const requestdata = await axios.get(`https://eic.mn/spa/app_spabasic.php?basic_id=${dataID}`)
      setDataDetail(requestdata.data.result)
    } catch(err) {
      setErrorMessage(err.message)
    }
  }

  useEffect(() => {
    loadDataDetail()
  }, [])

  return[dataDetail, errorMessage]
}