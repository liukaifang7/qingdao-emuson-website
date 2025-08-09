import React, { useState, useEffect, useRef } from 'react';

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);

  // 轮播图数据
  const slides = [
    {
      image: 'https://via.placeholder.com/1600x600/084798/ffffff?text=青岛云归谷科技+创新解决方案',
      title: '创新科技解决方案',
      description: '为企业提供全方位的数字化转型服务，助力企业实现智能化升级',
      cta: '了解详情'
    },
    {
      image: 'https://via.placeholder.com/1600x600/1e88e5/ffffff?text=能源管理+智能系统',
      title: '能源管理智能系统',
      description: '通过AI技术优化能源使用，降低企业能耗成本，实现可持续发展',
      cta: '探索方案'
    },
    {
      image: 'https://via.placeholder.com/1600x600/0d47a1/ffffff?text=碳管理+解决方案',
      title: '碳管理解决方案',
      description: '帮助企业实现碳足迹追踪、分析与报告，应对碳中和挑战',
      cta: '申请演示'
    }
  ];

  // 自动轮播
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  // 手动切换幻灯片
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel-container relative overflow-hidden" ref={carouselRef}>
      <div className="carousel relative h-[500px] md:h-[600px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'active' : 'hidden'}`}
            style={{ 
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: index === currentSlide ? 1 : 0
            }}
          >
            <div className="carousel-overlay absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
            <div className="carousel-content absolute inset-0 flex flex-col justify-end items-start p-8 md:p-16 text-white max-w-4xl">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg transform transition-all duration-500 ease-out" style={{ opacity: index === currentSlide ? 1 : 0, y: index === currentSlide ? 0 : 20 }}>{slide.title}</h3>
              <p className="text-lg md:text-xl mb-6 max-w-2xl drop-shadow-md transform transition-all duration-500 ease-out delay-100" style={{ opacity: index === currentSlide ? 1 : 0, y: index === currentSlide ? 0 : 20 }}>{slide.description}</p>
              <button className="carousel-cta bg-primary-color hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform transition-all duration-500 ease-out delay-200" style={{ opacity: index === currentSlide ? 1 : 0, y: index === currentSlide ? 0 : 20 }}>
                {slide.cta}
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-prev absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-primary-color text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 z-10">
        &lt;
      </button>
      <button className="carousel-next absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-primary-color text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 z-10">
        &gt;
      </button>
      <div className="carousel-indicators absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Carousel;