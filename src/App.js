import React, { useEffect, useState } from 'react'

import Skills from './components/Skills'
import Header from './components/Header'
import Hero from './components/Hero'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Footer from './components/Footer'

import useLanguageEnglish from './hooks/useLanguageEnglish'
import data from './data/data'
import { myContext } from './context/myContext'

import './App.css'

function App() {
  const [english, setEnglish] = useLanguageEnglish(true)

  const [myData, setMyData] = useState(data)

  const languageHandler = () => {
    setEnglish(!english)
    console.log(myData)
  }

  useEffect(() => {
  
    if (localStorage.getItem('english') === 'true') {
      setEnglish(true)
    } else {
      setEnglish(false)
    }

    setMyData(data)
  }, [])

  return (
    <myContext.Provider
      value={{ english, languageHandler, myData }}
    >
      <div className="flex flex-col bg-[#F9F9F9] box-border items-center w-screen">
        <div className="flex flex-col items-center bg-[#3730A3]">
          <section className="w-[960px] items-center">
            <Header></Header>
          </section>

          <section className="w-[960px]">
            <Hero></Hero>
          </section>

          <section className="flex flex-col w-screen pt-20 items-center bg-[#F9F9F9]">
            <Skills></Skills>
          </section>

          <section className="flex w-screen bg-[#3730A3] flex-col justify-center items-center">
            <Profile></Profile>
          </section>

          <section className="flex w-screen bg-[#3730A3] flex-col justify-center items-center">
            <Projects></Projects>
          </section>

          <section className="flex justify-center w-screen bg-[#F9F9F9] min-h-max pt-[84px] pb-24">
            <Footer></Footer>
          </section>
        </div>
      </div>
    </myContext.Provider>
  )
}

export default App
