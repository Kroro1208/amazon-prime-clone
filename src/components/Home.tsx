import { Carousel } from 'react-responsive-carousel';
import venom from "../images/main.jpg";
import jigen from "../images/jigen.jpg";
import bachelor from "../images/bachelor.jpg";
import NavBar from './NavBar';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Home = () => {
    return (
        <>
            <NavBar />
            <div className='grid grid-rows-2'>
                <div className='bg-black pl-7 h-screen'>
                    <h1 className='text-4xl text-gray-600 font-semibold ml-5 mt-4'>最新映画</h1>
                    <Carousel className='h-96 w-full mt-8' showThumbs={false} autoPlay={true}>
                        <div className='h-96 w-full'
                            style={{ backgroundImage: `url(${venom})`, backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "center" }}>
                        </div>
                        <div className='h-96 w-full'
                            style={{ backgroundImage: `url(${jigen})`, backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "center" }}>
                        </div>
                        <div className='h-96 w-full'
                            style={{ backgroundImage: `url(${bachelor})`, backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "center" }}>
                        </div>
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default Home;
