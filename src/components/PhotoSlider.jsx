import { useState ,useEffect} from 'react';
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const slides = [
  {
    src: image2,
  },
  {
    src: image1 ,
  },
];

function PhotoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  useEffect(()=>{
    setInterval(() => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      }, 5000);
  })
 

console.log(currentIndex)
  return (
    <div className=' h-[790px] w-full m-auto py-16  relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].src})` }}
        className='w-full h-full  bg-center bg-cover duration-500'
      ></div>
      

      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
     

      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      
    </div>
  );
}

export default PhotoSlider;
