import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

import {StlViewer} from "react-stl-viewer";


const url = "fan.stl"

const style = {
    width:"500px",
    height: "500px",
    borderRadius:"10px",
    border:"#4169e17c solid 1px"
}

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Flores cnc</title>
        <meta name="description" content="Flores cnc  servion de impresion 3D" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            <code className={styles.code}>florescnc.com</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
             Flores cnc
            </a>
          </div>
        </div>

        <div className={styles.center}>
            <StlViewer
          style={style}
          orbitControls
          shadows
          url="snake.stl"
          modelProps={{
              color:"royalblue",
              scale: 1.5,
              positionX: 70,
              positionY: -5
          }}
      /> 

        <StlViewer
          style={style}
          orbitControls
          shadows
          url={url}
          modelProps={{
              color:"royalblue",
              scale: 1.5,
              positionX: 70,
              positionY: -5
          }}
      />
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Impresion 3D <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              PLA - PETG
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Laser <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Corte y dubujos en madera
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Plasma <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Cortes pernalizados en laminas de hierro
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Router cnc <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Puerta, ventanas camas, muebles etc...
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
