import React, {useState} from "react";
import NavIcon from "../../icons/navicon";
import Logo from "./logo";
import Navigation from "./navigation";

const Header = () => {

    // let clicked = "clicked";
    // const [classes, setClasses] = useState<string>("clicked")
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState<boolean>(false);

    
  return (
    <>
      <section className="header bg-gray-10 border-b dark:bg-gray-900 dark:border-opacity-10">
        <div className="container mx-auto ">
        <div className="flex flex-wrap items-center justify-between py-4 mx-auto gap-4">
        

       
          <div className="flex-none z-10	">
            <Logo />
          </div>

          

          <div className="flex-none  gap-4 lg:hidden" onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}>
            <NavIcon />
          </div>

          <div className={`lg:flex flex-col lg:flex-row lg:items-center lg:justify-center text-sm w-full lg:w-auto z-0	${mobileMenuIsOpen ? `block animate-slideIn` : `hidden`}`}>
              <div className={`${mobileMenuIsOpen ? `p-2 	` : ` float-right`}`}>
              <Navigation  />
              </div>
            
          </div>
        </div>
        </div>
        
      </section>
    </>
  );
};

export default Header;