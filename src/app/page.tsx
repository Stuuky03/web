import Button from '@/components/atoms/Button/Button'
import styles from './page.module.scss'
import Title from '@/components/atoms/Title/Title'
import Link from 'next/link'

export default function homePage() {
  return (
    <main className={styles.main}>
      <div>
        <div>
          <Title name='title' h1='Stuuky' />
        </div>
        <div>
          <Link href="/auth/signup">SIGN UP</Link>
        </div>
        <div>
          <Link href="/auth/login">LOGIN</Link>
        </div>
        <div>
          <Link href="/home">HOME</Link>
        </div>
      </div>
    </main >
  )
}
