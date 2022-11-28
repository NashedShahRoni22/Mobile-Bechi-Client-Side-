import React from "react";
import { FaSuperpowers, FaTrash, FaListUl, FaMailBulk } from "react-icons/fa";

const WhyMobileBechi = () => {
  return (
    <section className="py-10">
    <h1 className="text-3xl  font-semibold mb-5 text-center">Why you will choose Mobile Bechi?</h1>
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="card border border-info shadow-xl">
        <div className="card-body">
          <div>
            <FaSuperpowers className="text-5xl text-info"></FaSuperpowers>
          </div>
          <div>
            <h2 className="card-title my-4">People Powered</h2>
            <p>
              On Mobile Bechi, you buy and sell directly with other users. No
              middleman means you get the best price and most value.
            </p>
          </div>
        </div>
      </div>
      <div className="card border border-info shadow-xl">
        <div className="card-body">
          <div>
            <FaTrash className="text-5xl text-info"></FaTrash>
          </div>
          <div>
            <h2 className="card-title my-4">No Junk</h2>
            <p>
              Mobile Bechi does not allow broken items. Every product has
              listing requirements and an approval process.
            </p>
          </div>
        </div>
      </div>
      <div className="card border border-info shadow-xl">
        <div className="card-body">
          <div>
            <FaListUl className="text-5xl text-info"></FaListUl>
          </div>
          <div>
            <h2 className="card-title my-4">Verified Listings</h2>
            <p>
              Every listing on Mobile Bechi is verified by our expert staff to ensure
              our strict listings requirements are followed. Buy with
              confidence.
            </p>
          </div>
        </div>
      </div>
      <div className="card border border-info shadow-xl">
        <div className="card-body">
          <div>
            <FaMailBulk className="text-5xl text-info"></FaMailBulk>
          </div>
          <div>
            <h2 className="card-title my-4">Great Support</h2>
            <p>
              Our support is provided by real humans who actually care. Mobile Bechi
              typical response time for help requests is around 20 minutes!
            </p>
          </div>
        </div>
      </div>
    </section>
    </section>
  );
};

export default WhyMobileBechi;
