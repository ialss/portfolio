

import './App.css'

function Main() {
  return (
    <>
        <body className="bg-bgGreen"> 
            <div>
                <h1 className="font-garamond text-txtGreen text-8xl font-thin">Hi there! I'm Klaidas Wikar</h1>
            </div>

            <div className="flex px-125">
                <h1 className="font-garamond text-lightTxtGreen text-2xl">/' klye-dahs vee-kar/</h1>
            </div>

            <div className="">
                <h2 className="font-garamond text-txtGreen text-5xl"> I'm a CE/CS major at Northeastern University in Boston, but I'm orginally from the Chicago area. I have a strong interest in embedded systems</h2>
            </div>
            
            <div className="flex justify-between">
                 <div className="">
                    <p className="font-garamond text-txtGreen text-4xl"> Currently I'm involved in Northeastern Electric Racing and AerospaceNU on Project Horizon. I'm huge on urbanism and public transit, so you might've seen me in a fourm or some of my wikipedia articles! I also have three cats!! If you're looking for further information you can find it via my resume or my linkedin. </p>
                </div>

                <div className="w-7xl">
                    <img src="src/assets/computer_chip.png" object-cover></img>
                </div>
                
            </div>
            

            <div className="flex">
                <h2 className="font-garamond text-txtGreen font-bold text-lg">Projects</h2>
                <h2 className="font-garamond text-txtGreen font-bold text-lg">Connect</h2>
            </div>

        </body>
    </>
  )
}

export default Main
