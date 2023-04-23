import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Main from '../components/Main'
import Person from '../components/Person'
import Persons from '../components/Persons'
import Splash from '../components/common/Splash'
import splashImg from '../public/assets/splash.jpg'
import NavBar from '../components/Navigation/NavBar'

export default function Home() {
  return (
    <div // className={styles.container}
      style={{
        minHeight: "150vh",
        //padding: "4rem 0",
        flex: "1",
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        // alignItems: "center",
        color: 'black'
      }}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar/>


      <Splash
        image={splashImg}
      >
        <div style={{
          flexDirection: "column",
          display: "flex",
          width: "60%"
        }}
        >
          <h1
            style={{ textShadow: '1px 1px white' }}
          >DevBank</h1>
          <h2
            style={{ textShadow: '1px 0 0 #fff, 0 -1px 0 #fff, 0 1px 0 #fff, -1px 0 0 #fff' }}
          >
            More Money, More Problems
          </h2>
        </div>
      </Splash>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}