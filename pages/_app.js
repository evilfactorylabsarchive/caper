import React from 'react'
import App from 'next/app'

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <main>
        <article>{children}</article>
        <span></span>
        <style jsx global>{`
          // lol gak gini mainnya bro

          :root {
            --text-color: orange;
            --bg-color: #100818;
            --serif-font: 'IBM Plex Serif';
            --sans-font: 'IBM Plex Sans';
          }

          ::selection {
            background-color: var(--text-color);
            color: #000;
          }

          * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
          }

          body {
            font-size: 16px;
            color: #333;
            background-color: #100818;
            font-family: var(--sans-font);
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          main {
            padding: 4rem 2rem;
            margin: auto;
            width: 1020px;
            max-width: 100%;
            border: 10px solid var(--text-color);
          }

          h2 {
            color: var(--text-color);
            margin-bottom: 1rem;
            font-style: italic;
            font-size: 1.8rem;
            line-height: 2.5rem;
            font-family: var(--serif-font);
          }

          p {
            line-height: 2.15rem;
            color: #fff;
            font-size: 1.2rem;
            margin-bottom: 2.5rem;
            padding-right: 1rem;
          }

          p + h2 {
            margin-top: 4rem;
          }

          span {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            background: rgba(255, 255, 255, 0.9);
            height: 15px;
            filter: blur(100px);
          }

          @media screen and (min-width: 50em) {
            h2 {
              font-size: 2.5rem;
              line-height: 3.5rem;
            }

            p {
              font-size: 1.3rem;
              padding-right: 5rem;
            }

            main {
              padding: 5rem 8rem;
            }
          }
        `}</style>
      </main>
    )
  }
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
}
