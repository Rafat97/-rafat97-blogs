import React from "react"

function HeroSection() {


  return (
    <>
      <section className="text-gray-600 dark:text-gray-300 dark:bg-gray-800 ">
        <div className="container mx-auto flex px-5 py-10 items-center justify-center flex-col">

          <div className="text-center lg:w-3/3 w-full ">
            <div className="title-font sm:text-4xl text-3xl mb-7 font-bold ">
              Blogs World
            </div>
           
            
            <div className="flex justify-center">
            <p className="mb-8 font-semibold ">
              Emdadul Haque (Rafat) | Student of Computer Science and Engineering | Ahsanullah University of Science and Technology
            </p>
              {/* <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button> */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection
