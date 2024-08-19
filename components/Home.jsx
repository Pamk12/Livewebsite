import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Image1 = './assets/image1.jpg'; 
const Image2 = './assets/image2.jpg'; 
const Image3 = './assets/image3.jpg'; 

function Home() {
  return (
    <div className="h-screen w-full overflow-hidden relative">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <div className="relative w-full h-screen"> 
            <img 
              src={Image1} 
              alt="Image 1" 
              className="object-cover w-full h-full" 
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30">
              <h2 className="text-5xl text-white font-bold mb-2">Empowering Your Business</h2>
              <p className="text-lg text-white mb-4">Transforming ideas into reality with technology.</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-screen"> 
            <img 
              src={Image2} 
              alt="Image 2" 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30">
              <h2 className="text-5xl text-white font-bold mb-2">Innovative Solutions</h2>
              <p className="text-lg text-white mb-4">Harnessing technology for your success.</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-screen">
            <img 
              src={Image3} 
              alt="Image 3" 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30">
              <h2 className="text-5xl text-white font-bold mb-2">Seamless Integration</h2>
              <p className="text-lg text-white mb-4">Integrating solutions that enhance productivity.</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Home;
