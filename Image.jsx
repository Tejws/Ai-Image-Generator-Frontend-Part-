import React, { useRef,useState }from 'react'
import './Image.css'
import default_image from '../Assets/default_image.svg'
const Image = () => {

  const[image_url,setImage_url] =useState('/');
  let inputRef= useRef(null);

  const imagegenerator =async()=>{
    if(inputRef.current.value===""){
      return 0;
    }
    
  }
  return (
    <div className='ai-image-generator'>
        <div className='header'>Ai Image <span>Generator</span></div>
      <div className='img-loading'>
        <div className='image'><img src={image_url==="/"?default_image:image_url} alt='hey'/></div>
      </div>
      <div className='search-box'>
        <input type="text" className='search-input' placeholder='Describe'/>
        <div className='generate-btn'>Generate</div>
      </div>
    </div>
  )
}

export default Image
