import React from "react";

const Footer = () => {
  return (
    <>
     <section className="footer bg-skin-fill border-t dark:bg-skin-bgdark dark:border-opacity-10">
        <div className="container  mx-auto ">
        <div className="flex flex-wrap items-center justify-between py-4 mx-auto gap-4 ">
                <div className="first">
                    <p className="text-skin-white">© Copyright Free Content, Inc.</p>
                </div>

                <div className="last float-right text-skin-white">
                    <p>© 2021 AbcXYZ, Inc.</p>
                </div>
        </div>
        </div>
     </section>
    </>
  );
};

export default Footer;
