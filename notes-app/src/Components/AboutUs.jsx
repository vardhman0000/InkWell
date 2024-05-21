// import React from 'react'
// import VJ from '../assets/vj.png'
// import Vardhman from '../assets/Vardhman1.jpg'
// import vartika1 from '../assets/Vartika2.jpg'
// import taniya from '../assets/Taniya1.jpg'
// import vansh from '../assets/Vansh1.jpg'
// import './aboutus.css'

// const AboutUs = () => {
//   return (
//     <div>
//       <section class="text-gray-600 body-font mx-[10vw]">
//         <div class="container px-5 py-24 mx-auto">
//           <div class="flex flex-wrap w-full mb-20">
//             <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
//               <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Our Team</h1>
//               <div class="h-1 w-20 bg-[#ef8335] rounded"></div>
//             </div>
//             <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Meet our dedicated team of professionals committed to delivering excellence and innovation in every project. Our diverse expertise and collaborative spirit drive us to exceed expectations and create lasting impact.</p>
//           </div>
//           <div class="flex flex-wrap -m-4">
//             <div class="xl:w-1/4 md:w-1/2 p-4">
//               <div class="bg-gray-100 p-6 rounded-lg border-2 border-black cards">
//                 <img class="h-auto rounded w-full object-cover object-center mb-6" src={Vardhman} alt="content"/>
//                 <h3 class="tracking-widest text-[#ef8335] text-xs font-medium title-font">MEMBER</h3>
//                 <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Vardhman Jain</h2>
//                 <p class="leading-relaxed text-base">Cybersecurity enthusiast and web developer passionate about digital security and innovative web solutions.</p>
//               </div>
//             </div>
//             <div class="xl:w-1/4 md:w-1/2 p-4">
//               <div class="bg-gray-100 p-6 rounded-lg border-2 border-black cards">
//                 <img class="h-auto rounded w-full object-cover object-center mb-6" src={vartika1} alt="content"/>
//                 <h3 class="tracking-widest text-[#ef8335] text-xs font-medium title-font">MEMBER</h3>
//                 <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Vartika Yadav</h2>
//                 <p class="leading-relaxed text-base">Innovative web developer building interactive solutions with cutting-edge technology and design</p>
//               </div>
//             </div>
//             <div class="xl:w-1/4 md:w-1/2 p-4">
//               <div class="bg-gray-100 p-6 rounded-lg border-2 border-black cards">
//                 <img class="h-auto rounded w-full object-cover object-center mb-6" src={taniya} alt="content"/>
//                 <h3 class="tracking-widest text-[#ef8335] text-xs font-medium title-font">MEMBER</h3>
//                 <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Taniya Singla</h2>
//                 <p class="leading-relaxed text-base">Experienced web developer delivering seamless user experiences through elegant design and functionality.</p>
//               </div>
//             </div>
//             <div class="xl:w-1/4 md:w-1/2 p-4">
//               <div class="bg-gray-100 p-6 rounded-lg border-2 border-black cards">
//                 <img class="h-auto rounded w-full object-cover object-center mb-6" src={vansh} alt="content"/>
//                 <h3 class="tracking-widest text-[#ef8335] text-xs font-medium title-font">MEMBER</h3>
//                 <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Vansh Pant</h2>
//                 <p class="leading-relaxed text-base">Skilled web developer specializing in crafting intuitive, responsive, and visually stunning websites</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default AboutUs


import React from 'react'
import VJ from '../assets/vj.png'
import Vardhman from '../assets/Vardhman1.jpg'
import vartika1 from '../assets/Vartika2.jpg'
import taniya from '../assets/Taniya1.jpg'
import vansh from '../assets/Vansh1.jpg'
import './aboutus.css'

const AboutUs = () => {
  const teamMembers = [
    {
      name: 'Vardhman Jain',
      image: Vardhman,
      description: 'Cybersecurity enthusiast and web developer passionate about digital security and innovative web solutions.'
    },
    {
      name: 'Vartika Yadav',
      image: vartika1,
      description: 'Innovative web developer building interactive solutions with cutting-edge technology and design.'
    },
    {
      name: 'Taniya Singla',
      image: taniya,
      description: 'Experienced web developer delivering seamless user experiences through elegant design and functionality.'
    },
    {
      name: 'Vansh Pant',
      image: vansh,
      description: 'Skilled web developer specializing in crafting intuitive, responsive, and visually stunning websites.'
    }
  ];

  return (
    <div>
      <section className="text-gray-600 body-font mx-[10vw]">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 ourTeam">Our Team</h1>
              <div className="h-1 w-20 bg-[#ef8335] rounded ourTeamBorder"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500 pageText">Meet our dedicated team of professionals committed to delivering excellence and innovation in every project. Our diverse expertise and collaborative spirit drive us to exceed expectations and create lasting impact.</p>
          </div>
          <div className="flex flex-wrap -m-4">
            {teamMembers.map((member, index) => (
              <div className="xl:w-1/4 md:w-1/2 p-4" key={index}>
                <div className="bg-gray-100 p-6 rounded-lg cards" style={{ '--delay': `${index * 0.2}s` }}>
                  <img className="h-auto rounded w-full object-cover object-center mb-6" src={member.image} alt="content" />
                  <h3 className="tracking-widest text-[#ef8335] text-xs font-medium title-font">MEMBER</h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{member.name}</h2>
                  <p className="leading-relaxed text-base">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
