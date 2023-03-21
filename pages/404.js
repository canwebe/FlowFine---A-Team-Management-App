import Image from 'next/image'
import s from '../styles/Error.module.css'
import svgImg from '../assets/404.svg'
import { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Head from 'next/head'

export default function Error404() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/')
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={s.body}>
      <Head>
        <title>FlowFine | 404</title>
      </Head>
      <div className={s.content}>
        <Image src={svgImg} alt="404 not found" />
        <p>Page Not Found Redirecting you to home page</p>
        <Link className={s.btn} href="/">
          Home
        </Link>
      </div>
    </div>
  )
}
