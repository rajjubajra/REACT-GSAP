import axios from 'axios';
import {useState, useEffect} from 'react';
import {gsap} from 'gsap';


function Slider() {

  const [imgArr, setImgArr] = useState([]);
  const [show, setShow] = useState(0);

  useEffect(()=>{
    axios({
      method: "GET",
      url: "http://localhost:3000/data/slider.json",
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then( response => setImgArr(response.data))
    .catch( err => console.error(err))

  },[])


  


  /** Image Slides Fade */
  setTimeout(() =>{
    setShow(show < imgArr.length -1 ? show + 1 : 0 );
  },3000)
  useEffect(() => {
      gsap.from('.slide', { opacity:0, duration: 3})
  },[show])

  //console.log(imgArr);

  return (
    <div>
      {
        imgArr.length > 0 && 
        imgArr.map((item,index)=>{
          return <img key={index}
          className={`w-48 h-auto absolute ${index === show ? 'slide' : 'hidden'}`} 
          src={item.url} 
          alt={item.alt} />
        })
      }
      
    </div>
  )
}

export default Slider
