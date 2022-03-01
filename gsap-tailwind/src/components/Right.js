import {useEffect} from 'react';
import {gsap} from 'gsap';

function Right() {

  useEffect(() => {
    gsap.from('.right',{delay: 2, duration:2, x: '-100vw', ease: 'power2.in'})
  },[])

  return (
    <div className="right bg-gray-500 w-32 ">Right</div>
  )
}

export default Right