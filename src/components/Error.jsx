import React from 'react'
import { useSelector } from 'react-redux'

const Error = (props) => {
    const error = useSelector((store)=>store.user.error)
  return (
    <div>{error}</div>
  )
}

export default Error