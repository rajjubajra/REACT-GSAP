import {useEffect} from 'react';
import {gsap} from 'gsap';

function Left() {

  useEffect(() => {
    gsap.from('.left',{duration: 1, delay: 2.5, x:'-100%'});

  },[]);


  return (
    <div className="left bg-gray-300 w-32">Left</div>
  )
}

export default Left