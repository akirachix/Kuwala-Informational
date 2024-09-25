// import Image from 'next/image';

// export default function Aboutpage() {
//   return (
//     <main className='bg-orange-900 py-5 px-4 mx-auto text-center md:text-left items-center ml-[5%]'>
//       <div className="flex flex-col md:flex-row lg:flex-row items-center max-w-7xl mx-auto mt-10 ipad-mini:flex-col surface-pro:flex-col ml-[5%]"> 
      
        
//         <div className="flex-shrink-0 mb-5 md:mb-0 md:mr-5 nest-hub:ml-auto nest-hub-max:ml-8 surface-pro:ml-0 surface-pro-7:mr-11 ipad-mini:mb-5 surface-pro:mb-5 3xl:ml-24">
//           <Image 
//             src="/images/food.png" 
//             width={2000} 
//             height={900} 
//             alt="Food" 
//             className="w-full max-w-full md:max-w-2xl md:w-[400px] lg:max-w-3xl ipad-mini:max-w-xl surface-pro:max-w-3xl md:w-40px xl:-ml-96" 
      
//             style={{ objectFit: 'contain' }}
//           />
//         </div>

//         <br/>

//         <div className="max-w-sm md:max-w-md lg:max-w-lg mx-auto md:mx-0 nest-hub:ml-auto nest-hub-max:ml-8 surface-pro:ml-0 item_center ipad-mini:max-w-sm surface-pro:max-w-lg lg:-ml-32 md:-ml-16">
//           <h2 className='text-white text-2xl md:text-3xl lg:text-4xl surface-pro-7:text-5xl mb-4 font-bold lg:ml-24'>
//             About Us
//             <br></br>
//           </h2>
//           <p className='text-white  text-base  md:text-lg text-[26px] lg:text-xl lg:w-[550px] surface-pro-7:text-4xl mb-2 md:mr-1  lg:ml-24 lg-text[10px] xl:text-2xl xl:w-[700px] line-clamp-7 text-start '>
//             Join Kuwala in the fight against food waste! Did you know that 1/3 of all food produced goes to waste?              
//             It impacts our wallets and our world. Let's empower each other to make a change-together, we can save food and 
//             create a brighter future. We believe that by working together, we can reduce food waste and make a positive impact.
//           </p>
//         </div>
//       </div>
//     </main>
//   );
// }







// import Image from 'next/image';

// export default function Aboutpage() {
//   return (
//     <main className='bg-orange-900 py-5 px-4 mx-auto text-center'>
//       <div className="flex flex-col md:flex-row lg:flex-row items-center max-w-7xl mx-auto mt-10">
        
//         <div className="flex-shrink-0 mb-5 md:mb-0 md:mr-5">
//           <Image 
//             src="/images/food.png" 
//             width={2000} 
//             height={900} 
//             alt="Food" 
//             className="w-full max-w-full md:max-w-2xl md:w-[400px] lg:max-w-3xl" 
//             style={{ objectFit: 'contain' }}
//           />
//         </div>

//         <br/>

//         <div className="max-w-sm md:max-w-md lg:max-w-lg mx-auto">
//           <h2 className='text-white text-2xl md:text-3xl lg:text-4xl mb-4 font-bold'>
//             About Us
//             <br />
//           </h2>
//           <p className='text-white text-base md:text-lg text-[26px] lg:text-xl lg:w-[550px] mb-2 text-start'>
//             Join Kuwala in the fight against food waste! Did you know that 1/3 of all food produced goes to waste?              
//             It impacts our wallets and our world. Let's empower each other to make a change - together, we can save food and 
//             create a brighter future. We believe that by working together, we can reduce food waste and make a positive impact.
//           </p>
//         </div>
//       </div>
//     </main>
//   );
// }



import Image from 'next/image';

export default function Aboutpage() {
  return (
    <main className='bg-orange-900 py-5 px-4 mx-auto text-center'>
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