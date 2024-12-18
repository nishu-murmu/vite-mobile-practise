const HeroSection = () => {
  return (
    <section id="home" className="bg-purple-primary">
      <div className="container mx-auto px-4 relative pt-4">
        <div className="flex flex-col md:flex-row items-start justify-between mt-[40px]">
          {/* Left Content */}
          <div className="flex-1 max-w-xl mt-8 max-sm:w-full">
            {/* Desktop View */}
            <span className="max-sm:hidden text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-white">Welcome To</span>
              <br />
              <span className="text-orange-500">Purple Haze Media,</span>
              <br />
              <span className="text-orange-500">Where Creativity</span>
              <br />
              <span className="text-white">Meets Strategy.</span>
            </span>

            {/* Mobile View */}
            <div className="sm:hidden w-full flex flex-col items-center text-center">
              <span className="text-[32px] font-bold leading-tight mb-6 flex flex-col">
                <span className="text-white">Welcome To</span>
                <span className="text-orange-500">Purple Haze Media,</span>
                <span className="text-orange-500">Where Creativity</span>
                <span className="text-white">Meets Strategy.</span>
              </span>
            </div>

            <p className="text-gray-300 max-sm:text-center text-lg leading-relaxed">
              Media Agency Established To
              <br />
              Help Brands Build And Develop
              <br />
              Their Presence In A Competitive
              <br />
              Digital Landscape.
            </p>
          </div>

          {/* Right Image with floating elements */}
          <div className="flex-1 relative h-[600px] max-sm:hidden">
            <img
              src="/images/guy-with-laptop.png"
              alt="Person with laptop"
              className="absolute bottom-0 right-0 max-w-[90%] h-auto"
            />

            {/* Floating Pills */}
            <div className="absolute top-[100px] right-[440px] pill-text bg-orange-500 px-6 py-2 rounded-full text-white">
              Meta Ads
            </div>
            <div className="absolute top-[150px] right-[410px] pill-text bg-orange-500 px-6 py-2 rounded-full text-white">
              Lead Generation
            </div>
            <div className="absolute top-[200px] right-[420px] pill-text bg-white text-purple-950 px-6 py-2 rounded-full">
              Brand Identity
            </div>
            <div className="absolute top-[126px] md:right-[-22px] lg:right-[14px] right-[-74px] pill-text bg-white px-6 py-2 rounded-full text-purple-950">
              Influencer Marketing
            </div>
            <div className="absolute bottom-[280px] right-[-12px] pill-text bg-orange-500 px-6 py-2 rounded-full text-white">
              Political Campaign
            </div>
            <div className="absolute bottom-[230px] right-[4px] pill-text bg-white text-purple-950 px-6 py-2 rounded-full">
              PR and Publicity
            </div>
          </div>

          {/* Mobile Image */}
          <img
            src="/images/guy-with-laptop-update.png"
            alt="Person with laptop updated"
            className="sm:hidden max-w-[95%] h-auto mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
