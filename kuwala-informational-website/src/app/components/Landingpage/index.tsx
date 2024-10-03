
import Image from 'next/image';

export default function LandingPage() {
  return (
    <main id='Landingpage' className="container mb-16 mx-auto px-4 py-12 max-w-7xl">
      <div className="flex flex-col lg:flex-row gap-y-40 items-center justify-between">
        <div className="mb-8 mt-20 lg:mb-0 text-center lg:text-left">
          <h1 className="text-4xl 2xl:w-4/4 sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-12">
            Waste Not, Want Not!
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-8 leading-tight sm:leading-normal lg:leading-relaxed">
            Cultivating creativity and<br className="hidden sm:inline" />
            togetherness in food waste reduction.
          </p>
          <div className="inline-flex items-center  2xl:mt-20 bg-orange-800 text-white rounded-lg px-4 py-2 hover:bg-orange-700 transition-colors">
            <Image
              src="/images/playstore.png"
              alt="Playstore Icon"
              width={32}
              height={32}
              className="w-6 h-6 sm:w-8 sm:h-8 mr-3"
            />
            <div>
              <p className="text-xs sm:text-sm">Get it on</p>
              <p className="text-base sm:text-lg font-semibold">Google Play</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 2xl:ml-2
        0 lg:mt-0">
          <Image
            src="/images/household.png"
            alt="Household cook"
            width={500}
            height={500}
            className="w-full lg:mt-14 max-w-md mx-auto lg:max-w-lg xl:max-w-xl"
          />
        </div>
      </div>
    </main>
  );
}