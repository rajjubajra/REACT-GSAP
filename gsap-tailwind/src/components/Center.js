import {useEffect} from 'react';
import {gsap} from 'gsap';

function Center() {

  useEffect(() => {
      gsap.fromTo('.center',{opacity:0, scale: 0, rotation: 720}, {duration: 1, delay: 4.5, opacity:1, scale: 1, rotation: 0, ease: 'power4'})
  },[]);

  const obj = {x:0}

  useEffect(() => {
 //   gsap.to(obj, {duration:2, x:100, onUpdate: () => console.log(obj.x)})
  },[])



  return (
    <div className="center bg-gray-600 text-gray-300 p-10 flex self-center">
      <div>Text Center</div>
    </div>
  )
}

export default Center
