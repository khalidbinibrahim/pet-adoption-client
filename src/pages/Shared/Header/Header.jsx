import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCards } from 'swiper/modules';
import { Fade } from "react-awesome-reveal";
import { MdPets } from "react-icons/md";

import 'swiper/css';
import 'swiper/css/effect-cards';

const Header = () => {
    return (
        <div className='relative'>
            <div className="relative bg-no-repeat bg-center bg-cover mb-12" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBldCUyMGFkb3B0aW9ufGVufDB8fDB8fHww')" }}>
                <div className='absolute inset-0 bg-gradient-to-r from-black to-slate-800 opacity-50'></div>
                <div className='relative px-32 py-40'>
                    <div className="flex justify-between items-center">
                        <div>
                            <Fade direction="down" triggerOnce={true}><h1 className="font-sourceSans3 mb-5 text-7xl font-semibold text-white">Best Friend with <br /> Happy Time</h1></Fade>
                            <p className="font-sourceSans3 text-[#F3F3F3] font-medium text-lg mb-7">Human Shampoo on Dogs After six days of delirat, the <br /> jury found Hernandez guilty of first-degree murder</p>
                            <Fade direction="up" triggerOnce={true}><button to="/add_tourists_spot" className="btn bg-[#F7A582] border-none text-white font-semibold text-base font-sourceSans3 rounded-md px-7">View More <i className='text-xl'><MdPets /></i></button></Fade>
                        </div>

                        <div className="w-[270px]">
                            <Swiper
                                speed={600}
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false,
                                }}
                                modules={[Autoplay, EffectCards]}
                                effect={'cards'}
                                grabCursor={true}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <div className="bg-[url('https://plus.unsplash.com/premium_photo-1674236550362-58a7fdd7f899?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBldCUyMGNhbmFkaWFufGVufDB8fDB8fHww')] bg-center bg-no-repeat bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                        <div className="title" data-swiper-parallax="-300">
                                            <p className="absolute top-80 font-normal text-4xl text-white font-bebasNeue">Canadian</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="bg-[url('https://images.unsplash.com/photo-1565803974275-dccd2f933cbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dm9sdW50ZWVyaW5nfGVufDB8fDB8fHww')] bg-center bg-no-repeat bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                        <div className="title" data-swiper-parallax="-300">
                                            <p className="absolute top-80 font-normal text-4xl text-white font-bebasNeue">Barbados</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="bg-[url('https://images.unsplash.com/photo-1670405564800-bbb09765317b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHZvbHVudGVlcmluZ3xlbnwwfHwwfHx8MA%3D%3D')] bg-center bg-no-repeat bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                        <div className="title" data-swiper-parallax="-300">
                                            <p className="absolute top-80 font-normal text-4xl text-white font-bebasNeue">Italy</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="bg-[url('https://plus.unsplash.com/premium_photo-1681152790484-8c0beab3999a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dm9sdW50ZWVyaW5nfGVufDB8fDB8fHww')] bg-center bg-no-repeat bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                        <div className="title" data-swiper-parallax="-300">
                                            <p className="absolute top-72 font-normal text-4xl text-white font-bebasNeue">República dominicana</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="bg-[url('https://images.unsplash.com/photo-1655573988224-2484b832dd5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHZvbHVudGVlcmluZ3xlbnwwfHwwfHx8MA%3D%3D')] bg-center bg-no-repeat bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                        <div className="title" data-swiper-parallax="-300">
                                            <p className="absolute top-80 font-normal text-4xl text-white font-bebasNeue">Turkey</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="bg-[url('https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHZvbHVudGVlcmluZ3xlbnwwfHwwfHx8MA%3D%3D')] bg-center bg-no-repeat bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                        <div className="title" data-swiper-parallax="-300">
                                            <p className="absolute top-80 font-normal text-4xl text-white font-bebasNeue">Nepal</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
