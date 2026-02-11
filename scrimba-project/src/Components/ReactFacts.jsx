import  image from '../assets/react.svg'
 function ReactFacts(){

    return(
      <div  className="min-h-screen flex flex-col">
        <nav className=" bg-[rgb(36,36,50)] flex gap-4 p-5">
            <img src={image} alt="react-logo" />
            <span className="text-3xl text-cyan-400 font-semibold">ReactFacts</span>
        </nav>

        <main className="flex-1 bg-[rgb(46,46,56)]">
            <h1 className="text-4xl font-bold text-white p-5">Fun facts about React</h1>

            <ul className=" p-3 text-white text-lg list-disc pl-10 text-left space-y-3">
                <li>Was first released in 2013</li>
                <li>Was originally create by walke</li>
                <li>Has well over 200k stars on Github</li>
                <li>Is maintained by Meta</li>
                <li>Powers thousands of enterprise apps,including mobile apps</li>
            </ul>
        </main>
      </div>
    )
 }

 export default ReactFacts;