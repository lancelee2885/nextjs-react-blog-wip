import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Loader from '../components/Loader'
import toast from 'react-hot-toast'

export default function Home() {
  return (
    <div>
      <Loader show={true} />
      <Link 
        prefetch={true}
        href={{
          pathname: '/[username]',
          query: {username: 'lancelee'}
        }}>
        Lance's Profile
      </Link>
      <button onClick={() => toast.success('helle toast')}>Toast Me</button>
    </div>
  )
}
