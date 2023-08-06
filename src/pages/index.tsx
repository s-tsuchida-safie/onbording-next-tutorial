import { useEffect } from 'react'
import { useRouter } from 'next/router'

const Top = () => {
  const router = useRouter()
  useEffect(() => {
    router.push('home')
  }, [router])

  return <></>
}

export default Top
