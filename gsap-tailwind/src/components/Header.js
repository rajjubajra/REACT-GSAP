import {useEffect} from 'react'
import Nav from './Nav';
import {gsap} from 'gsap'

function Header() {

  useEffect(() => {
    gsap.from(".header",{duration:1, y: "-100%", ease: 'bounce'})
  },[])

  return (
    <div className="header h-16 flex justify-center items-center bg-gray-200  ">
        <Nav />
    </div>
  )
}

export default Header