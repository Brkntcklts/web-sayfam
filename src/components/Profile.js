import React, { useContext } from 'react'
import { myContext } from '../context/myContext'

import profilePhoto from '../assets/profile-2.jpg'

const Profile = () => {
  const { english } = useContext(myContext)
  return (
    <div className="flex flex-col w-[960px] pt-24 pb-32 px-0">
      <h2 className="text-5xl text-[#FFD700] font-bold pb-7">
        {!english ? 'Profil' : 'Profile'}
      </h2>
      <div className="flex justify-between flex-row">
        <div className="flex flex-col w-[300px] p-6 rounded-lg bg-[#120b39] text-[#FFFFFF]">
          <h3 className="text-3xl font-normal pb-4">
            {!english ? 'Temel Bilgiler' : 'Basic Information'}
          </h3>
          <div className="text-base leading-6 space-y-2">
            <p>
              <span className="font-semibold text-[#FFA500]">
                {!english ? 'Doğum Tarihi:' : 'Date of Birth:'}
              </span>{' '}
              23.03.1994
            </p>
            <p>
              <span className="font-semibold text-[#FFA500]">
                {!english ? 'Şehir:' : 'City :'}
              </span>{' '}
              İstanbul
            </p>
            <p>
              <span className="font-semibold text-[#FFA500]">
                {!english ? 'Eğitim Durumu:' : 'Education Info:'}
              </span>{' '}
              {!english
                ? 'İstanbul Arel Üniversitesi - Turizm ve Otel İşletmeciliği'
                : 'Istanbul Arel University - Tourism and Hotel Management'}
            </p>
            <p>
              <span className="font-semibold text-[#FFA500]">
                {!english ? 'Tercih Ettiği Rol:' : 'Preferred Role:'}
              </span>{' '}
              Frontend, UI
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start pt-8 px-6">
          <img
            className="object-cover rounded-lg w-48 h-48 mb-4"
            src={profilePhoto}
            alt="Profile"
          />
        </div>
        <div className="flex flex-col w-[300px] p-6 rounded-lg bg-[#120b39] text-[#FFFFFF]">
          <h3 className="text-3xl font-normal pb-4">
            {english ? 'About Me' : 'Hakkımda'}
          </h3>
          <div className="text-base leading-6">
            <p>
              Merhaba! 1994 yılında İstanbul'da doğdum ve İstanbul Arel Üniversitesi'nden Turizm ve Otel İşletmeciliği bölümünden mezun oldum. Ancak, gerçek tutkum yazılım dünyasında yer almak. Yaratıcı çözümler geliştirmek ve kullanıcı dostu arayüzler tasarlamak için ön uç geliştirme (Frontend) alanında çalışıyorum. Teknolojiyi ve yenilikleri takip etmeyi seviyorum, sürekli öğrenme ve gelişme odaklıyım. Farklı projelerde edindiğim deneyimlerle, kullanıcı deneyimini en üst düzeye çıkarmayı hedefliyorum.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
