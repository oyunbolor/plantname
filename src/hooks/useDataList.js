import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default () => {
  const [datalist, setDataList] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios.get(`https://eic.mn/spa/app_spabasic.php`)
    .then(result => {
      //console.log('Сангаас мэдээллийг амжилттай хүлээж авлаа...')
      setDataList(result.data.result)
      setErrorMessage(null)
      setLoading(false)
    })
    .catch( err => {
      let message = err.message
      if(message === 'Request failed with status code 404')
        message = 'Уучлаарай сервер дээр энэ өгөгдөл байхгүй байна ....'
      else if(message === 'Network Error')
        message = 'Сервер ажиллахгүй байна. Та түр хүлээгээд дахин оролдоно уу ....'
      setErrorMessage(message)
      setLoading(false)
    })
  }, [])

  return[datalist, errorMessage, loading]
}