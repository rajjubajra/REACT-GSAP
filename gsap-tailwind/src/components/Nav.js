import {useEffect} from 'react';
import {gsap} from 'gsap';


function Nav() {

  useEffect(() => {
    gsap.from('.link',{duration: 1, opacity: 0, delay: 1, stagger: .5})

  },[])


  return (
    <ul className="links flex justify-center">
      <li className="link mx-3">Link 1</li>
      <li className="link mx-3">Link 2</li>
      <li className="link mx-3">Link 3</li>
    </ul>
  )
}

export default Nav