const NavBar = () => {
    return ( 
        <div className="">
            <nav className="h-[10vh] bg-slate-900 flex justify-between items-center text-white py-5 px-20">
                <span className="text-2xl text-[#EEBE5F] font-bold">LOGO</span>
                <ul className="flex gap-10 text-[1rem]">
                    <li className="hover:text-fuchsia-600 transition cursor-pointer">Accueil</li>
                    <li className="hover:text-fuchsia-600 transition cursor-pointer">A propos</li>
                    <li className="hover:text-fuchsia-600 transition cursor-pointer">Skils</li>
                    <li className="hover:text-fuchsia-600 transition cursor-pointer">Projets</li>
                    <li className="hover:text-fuchsia-600 transition cursor-pointer">Contact</li>
                </ul>
            </nav>
            <div className="">
                <div className="">
                    <span>Helo</span>
                    <h1>I'm Michael Lunzotisa</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Tenetur placeat nihil ad nesciunt. Officia repellat recusandae
                        cum reprehenderit expedita commodi, dignissimos quaerat nulla 
                        maiores corporis neque quasi facilis voluptatum aspernatur.
                    </p>
                </div>
                <div>
                    <img src="" alt="" />
                </div>

            </div>
        </div>
     );
}
 
export default NavBar;