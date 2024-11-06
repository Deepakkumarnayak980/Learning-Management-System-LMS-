import HomeLayout from "../Layout/HomeLayout";
import aboutMainImage from "../Assets/Images/aboutMainImage.png";
import api from "../Assets/Images/apj.png";
import billGates from "../Assets/Images/billGates.png";
import einstein from "../Assets/Images/einstein.png";
import nelsonMandela from "../Assets/Images/nelsonMandela.png";
import steveJobs from "../Assets/Images/steveJobs.png";

function AboutUs() {
    return (
        <HomeLayout>
            <div className="pl-20 pt-20 flex flex-col text-white">
                <div className="flex items-center gap-5 mx-10">
                    <section className="w-1/2 space-y-10">
                        <h1 className="text-5xl text-yellow-400 font-bold font-serif">
                            Affordable And Quality Education
                        </h1>
                        <p className="text-xl text-gray-200">
                            Our goal is to provide affordable and quality education to the world.
                            We are providing the platform for aspiring teachers and students to share their skills, creativity, and knowledge with each other to empower and contribute to the growth and wellness of mankind.
                        </p>
                    </section>

                    <div className="w-1/2">
                        <img
                            style={{ filter: "drop-shadow(0px 10px 10px rgb(0,0,0))" }}
                            alt="about main image"
                            className="drop-shadow-2xl"
                            src={aboutMainImage}
                        />
                    </div>
                </div>

                {/* Carousel Controls */}
                <div className="carousel w-1/2 m-auto my-16">
                
                    {/* Slide 1 */}
                    <div id="slide1" className="carousel-item relative w-full flex flex-col items-center justify-center gap-4">
                        <img src={api} className="w-40 rounded-full border-2 border-gray-400" alt="API Image" />
                        <h1 className="text-2xl font-semibold">APJ Abdul Kalam</h1>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide5" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                    {/* Slide 2 */}
                    <div id="slide2" className="carousel-item relative w-full flex flex-col items-center justify-center gap-4">
                        <img src={billGates} className="w-40 rounded-full border-2 border-gray-400" alt="Bill Gates" />
                        <p className="text-2xl font-semibold">Bill Gates</p>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                    {/* Slide 3 */}
                    <div id="slide3" className="carousel-item relative w-full flex flex-col items-center justify-center gap-4">
                        <img src={einstein} className="w-40 rounded-full border-2 border-gray-400" alt="Einstein" />
                        <p className="text-2xl font-semibold">Albert Einstein</p>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                    {/* Slide 4 */}
                    <div id="slide4" className="carousel-item relative w-full flex flex-col items-center justify-center gap-4">
                        <img src={nelsonMandela} className="w-40 rounded-full border-2 border-gray-400" alt="Nelson Mandela" />
                        <p className="text-2xl font-semibold">Nelson Mandela</p>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide5" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                    {/* Slide 5 (Steve Jobs) */}
                    <div id="slide5" className="carousel-item relative w-full flex flex-col items-center justify-center gap-4">
                        <img src={steveJobs} className="w-40 rounded-full border-2 border-gray-400" alt="Steve Jobs" />
                        <p className="text-2xl font-semibold">Steve Jobs</p>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>

            </div>
        </HomeLayout>
    );
}

export default AboutUs;