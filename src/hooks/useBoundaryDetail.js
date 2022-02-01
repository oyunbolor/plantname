import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default dataID => {
  const [boundaryDetail, setBoundaryDetail] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  const loadBoundaryDetail = async () => {
    try {
      const requestdata = await axios.get(`https://eic.mn/spa/app_spaboundary.php?basic_id=${dataID}`)
      setBoundaryDetail(requestdata.data.result)
    } catch(err) {
      setErrorMessage(err.message)
    }
  }

  useEffect(() => {
    loadBoundaryDetail()
  }, [])

  return[boundaryDetail, errorMessage]
}