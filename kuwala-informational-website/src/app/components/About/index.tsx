
import Image from 'next/image';

export default function Aboutpage() {
  return (
    <main className='bg-orange-900 py-10 px-4 mx-auto text-center'>
      <div className="gap-[-1%] flex flex-col md:flex-row lg:flex-row items-center max-w-7xl mx-auto mt-10">
        <div className="flex-shrink-0 mb-3 md:mb-0 md:mr-3">
          <Image 
            src="/images/food.png" 
            width={2000} 
            height={900} 
            alt="Food" 
            className=" ml-[7%] w-full max-w-full md:max-w-2xl md:w-[400px] lg:max-w-3xl" 
            style={{ objectFit: 'contain' }}
          />
        </div>

        <div className="max-w-sm md:max-w-md lg:max-w-lg mx-auto">
          <h2 className='text-white mr-[65%] text-2xl md:text-3xl lg:text-4xl mb-4 font-bold'>
            About Us
            <br />
          </h2>
          <p className='text-white text-base md:text-lg text-[26px] lg:text-xl lg:w-[550px] mb-2 text-start'>
            Join Kuwala in the fight against food waste! Did you know that 1/3 of all food produced goes to waste?              
            It impacts our wallets and our world. Let's empower each other to make a change - together, we can save food and 
            create a brighter future. We believe that by working together, we can reduce food waste and make a positive impact.
          </p>
        </div>
      </div>
    </main>
  );
}


