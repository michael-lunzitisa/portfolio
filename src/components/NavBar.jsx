const NavBar = () => {
    return ( 
        <div className="">
            <nav className="h-[10vh] bg-slate-900 flex justify-between items-center text-white py-5 px-20">
                <span className="text-2xl">LOGO</span>
                <ul className="flex">
                    <li className="ml-5">Accueil</li>
                    <li className="ml-5">A propos</li>
                    <li className="ml-5">Skils</li>
                    <li className="ml-5">Projets</li>
                    <li className="ml-5">Contact</li>
                </ul>
            </nav>
        </div>
     );
}
 
export default NavBar;