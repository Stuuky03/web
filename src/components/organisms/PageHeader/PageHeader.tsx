import "./PageHeader.scss"

import Input from "@/components/atoms/Input/Input"
import ProfileImage from "@/components/atoms/ProfileImage/ProfileImage"
import Image from 'next/image'

import notificationIcon from "@/assets/icons/notification-icon.png"

const PageHeader = () => {
  return (
    <header>
      <Image src="/assets/icon-colored.svg" width={72} height={40} alt='Stuuky' />
      <div className='search-input-container'>
        <Input className='search-input' id='search' placeholder='Pesquise por um assunto ou pergunta' />
      </div>
      <div className='icons-container'>
        <Image src={notificationIcon} width={24} height={24} alt='Notification' />
        <ProfileImage width={28} height={28} studentUsername='albberrrt' />
      </div>
    </header>
  )
}

export default PageHeader