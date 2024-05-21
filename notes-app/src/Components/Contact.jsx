import React, {useState} from 'react';


const Contact = () => {

  const [formData, setFormData] = useState({
    name : "",
    email : "",
    message : ""
  });

  function inputData(e){
    const {name, value} = e.target;
    setFormData((prevData) => ({ 
      ...prevData,
      [name]:value,
    }));
  }

  async function handleSubmit(e){
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4003/contact", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      alert("Thankyou For Your Feedback");
      window.location.reload();
    } catch (error) {
      console.error("Error:", error);
    }
  }


  return (
    <div>
      <form onSubmit={handleSubmit} className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder="0"
              title="map"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
              // src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
              src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13761.932897700675!2d76.6572029!3d30.5160865!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x81b346dee91799ca!2sChitkara%20University!5e0!3m2!1sen!2sin!4v1649231525621!5m2!1sen!2sin'
              style={{
                filter: 'grayscale(1) contrast(1.2) opacity(0.4)'
              }}
            ></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-[#e78138] tracking-widest text-xs">ADDRESS</h2>
                <p className="mt-1">Chitkara University, Rajpura, Punjab - 140401</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-[#e78138] tracking-widest text-xs">EMAIL</h2>
                <a href="mailto:example@email.com" className="text-gray-600 leading-relaxed">vardhman0000@gmail.com</a>
                <h2 className="title-font font-semibold text-[#e78138] tracking-widest text-xs mt-4">PHONE</h2>
                <p className="leading-relaxed">123-456-7890</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-[#e78138] font-bold text-xl mb-1 title-font">Feedback</h2>
            <p className="leading-relaxed mb-5 text-gray-600">Please provide us your valuable feedback</p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
              <input onChange={inputData} value={formData.name} type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-[#e78138] focus:ring-2 focus:ring-[#f3a97598] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input onChange={inputData} value={formData.email} type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-[#e78138] focus:ring-2 focus:ring-[#f3a97598] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
              <textarea onChange={inputData} value={formData.message} id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-[#e78138] focus:ring-2 focus:ring-[#f3a97598] h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            {/* <button className="text-white bg-[#ef8335] border-0 py-2 px-6 focus:outline-none hover:bg-[#faa442] hover:shadow-xl shadow-[#faa977] rounded text-lg">Button</button> */}

            <div class="w-full h-40 flex items-center justify-center cursor-pointer">
              <div
                class="relative w-full inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 dark:bg-gray-700 dark:text-white dark:hover:text-gray-200 dark:shadow-none group"
              >
                <span
                  class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#ef8335] group-hover:h-full"
                ></span>
                <span
                  class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="none"
                    class="w-5 h-5 text-green-400"
                  >
                    <path
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                      stroke-width="2"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                    ></path>
                  </svg>
                </span>
                <span
                  class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="none"
                    class="w-5 h-5 text-green-400"
                  >
                    <path
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                      stroke-width="2"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                    ></path>
                  </svg>
                </span>
                <button type='submit' className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white dark:group-hover:text-gray-200"
                  >SUBMIT</button>
              </div>
            </div>

            <p className="text-xs text-gray-500 mt-3 text-center">Privacy Policy</p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;

