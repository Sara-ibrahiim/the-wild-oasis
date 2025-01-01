import CabinCard from "@/app/_components/CabinCard";
import { getCabins } from "../_lib/data-service";
import CabinList from "../_components/CabinList";
import { Suspense } from "react";
import Spinner from "../_components/Spinner";

export const metadata={
    title: "Cabins",

  };


  export default async function Page() {
  
    // CHANGE

  
    return (
      <div>
        <h1 className="text-4xl mb-5 text-accent-400 font-medium">
          Our Luxury Cabins
        </h1>
        <p className="text-primary-200 text-lg mb-10">
          Cozy yet luxurious cabins, located right in the heart of the Italian
          Dolomites. Imagine waking up to beautiful mountain views, spending your
          days exploring the dark forests around, or just relaxing in your private
          hot tub under the stars. Enjoy nature's beauty in your own little home
          away from home. The perfect spot for a peaceful, calm vacation. Welcome
          to paradise.
        </p>
  
        {/* {cabins.length > 0 && (
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
            {cabins.map((cabin:any) => (
              <CabinCard cabin={cabin} key={cabin.id} />
            ))}
          </div>
        )} */}
        <Suspense fallback={<Spinner/>}>
        <CabinList/>
        </Suspense>
       
      </div>
    );
  }