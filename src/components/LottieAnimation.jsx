import React, { useEffect, useState } from 'react'
import Lottie from 'lottie-react'

export default function LottieAnimation({ animationData, path, loop = true, style = { width: 300, height: 300 } }) {
  const [data, setData] = useState(animationData || null)

  useEffect(() => {
    let mounted = true
    if (!data && path) {
      fetch(path)
        .then(res => res.json())
        .then(json => {
          if (mounted) setData(json)
        })
        .catch(() => {})
    }
    return () => { mounted = false }
  }, [path, data])

  if (!data) return null
  return (
    <div style={style}>
      <Lottie animationData={data} loop={loop} />
    </div>
  )
}
