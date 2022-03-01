import {useEffect} from 'react';
import {gsap} from 'gsap';

function Footer() {
  
  useEffect(() => {
    gsap.to('.footer',{duration: 1, y:0, ease:'elastic', delay: 4.0})

  },[]);

  return (
    <div className="footer translate-y-full bg-gray-400 h-24">Footer</div>
  )
}

export default Footer