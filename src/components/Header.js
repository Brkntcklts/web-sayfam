import React, { useContext } from 'react'
import { myContext } from '../context/myContext'

const Header = () => {
  const { english, languageHandler } = useContext(myContext)
  return (
    <div className="items-center justify-end text-xs flex flex-row pt-8">
      <div className="flex justify-end flex-row ps-3 pe-6">
        <p
          onClick={languageHandler}
          className=" font-inter font-bold text-base leading-5 tracking-wider text-white "
        >
          {english && (
            <span>
              <span className="font-inter font-bold text-base leading-5 tracking-wider text-[#CBF281] hover:text-[#BAB2E7]">
                TÜRKÇE
              </span>
            </span>
          )}
          {!english && (
            <span>
              <span className="font-inter font-bold text-base leading-5 tracking-wider text-[#CBF281] hover:text-[#BAB2E7]">
                ENGLISH
              </span>
            </span>
          )}
        </p>
      </div>
    </div>
  )
}

export default Header
