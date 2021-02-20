import React from "react";
import Bounce from "react-reveal/Bounce";
import Layout from '../components/Layout'

const FourOhFour = () => {
  return (
    <Layout>
      <div>
        <section className="text-gray-600 dark:text-gray-300  dark:bg-gray-800 ">
          <div className="h-screen mx-auto flex items-center justify-center flex-col">
            <div className="text-9xl font-extrabold font-sans error-text">
              <Bounce big top cascade>
                404
              </Bounce>
            </div>
            <div className="text-3xl pt-5 font-sans">
              Sorry ! Page Not Found
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default FourOhFour;
