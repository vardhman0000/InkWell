import React from 'react'

import Bill from '../../assets/Bill.jpeg'
import Elon from '../../assets/Elon.jpg'
import Jeff from '../../assets/Jeff.jpg'


function Testimonial() {
    return (
        <div>
            <section class="text-gray-600 body-font mx-[14vw]">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap -m-4">
                    <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
                        <div class="h-full text-center">
                        <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={Bill}/>
                        <p class="leading-relaxed">As a busy professional, staying organized is key. This notes app has become my go-to tool for keeping track of important information on the fly.</p>
                        <span class="inline-block h-1 w-10 rounded bg-orange-500 mt-6 mb-4"></span>
                        <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">BILL GATES</h2>
                        <p class="text-gray-500">CEO <br /> Microsoft</p>
                        </div>
                    </div>
                    <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">     
                        <div class="h-full text-center">
                        <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={Elon}/>
                        <p class="leading-relaxed">A true productivity powerhouse! With its sleek design and an array of powerful features, this notes app has redefined the way I manage my workload. </p>
                        <span class="inline-block h-1 w-10 rounded bg-orange-500 mt-6 mb-4"></span>
                        <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">ELON MUSK</h2>
                        <p class="text-gray-500">CEO <br />Tesla, Space-X</p>
                        </div>
                    </div>
                    <div class="lg:w-1/3 lg:mb-0 p-4">
                        <div class="h-full text-center">
                        <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={Jeff}/>
                        <p class="leading-relaxed">I've finally found the ultimate solution for staying productive and organized! This notes app offers the perfect blend of simplicity and functionality.</p>
                        <span class="inline-block h-1 w-10 rounded bg-orange-500 mt-6 mb-4"></span>
                        <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">JEFF BEZOS</h2>
                        <p class="text-gray-500">CTO <br /> Amazon</p>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial
