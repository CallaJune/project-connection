import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Project Connection | Welcome</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="/">Project Connection</a>
        </h1>

        <p className={styles.description}>
          Connecting students to connect schools
        </p>

        <div className={styles.grid}>
          <a href="/match" className={styles.card}>
            <h3>Make Match</h3>
            <p>Connect students from schools across the globe</p>
          </a>

          <a href="/enter" className={styles.card}>
            <h3>Enter Data</h3>
            <p>Expand our knowledge about schools</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
          <a href="https://www.projectconnect.world/">Learn more about Project Connect.</a>
      </footer>
    </div>
  )
}
