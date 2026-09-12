import bannerlogo from '../assets/banner-main.png';
import banner from '../assets/bg-shadow.png';

const Banner = () => {
    return (
        <section
            className="container mx-auto px-4 mt-5 min-h-145 rounded-2xl bg-cover bg-center bg-no-repeat bg-[#131313]"
            style={{ backgroundImage: `url(${banner})` }}
        >
            <div className="min-h-145 flex flex-col items-center justify-center text-center">

                <img
                    src={bannerlogo}
                    alt="Cricket"
                    className="w-52 md:w-64 lg:w-72 mb-6"
                />

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                    Assemble Your Ultimat Dream 11 Cricket Team
                </h1>

                <p className="mt-4 max-w-2xl text-base md:text-lg text-white/90">
                    Beyond Boundaries Beyond Limits
                </p>

                <button className="mt-7 bg-[#DBF028]  border-[#DBF028] outline-1 outline-[#DBF028] outline-offset-3 px-6 py-3 rounded-lg font-semibold">
                    Claim Free Credit
                </button>

            </div>
        </section>
    );
};

export default Banner;