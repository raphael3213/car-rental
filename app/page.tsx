import Hero from "@/components/Hero";
import CustomFilter from "@/components/CustomFilter";
import SearchBar from "@/components/SearchBar";
import Image from "next/image";
import { fetchCars } from "@/utils";
import CarCard from "@/components/CarCard";
import { Car } from "@/types/Car";

export default async function Home() {
  const allCars = await fetchCars();
  const isDataEmpty = Array.isArray(allCars) && allCars.length === 0;
  console.log(isDataEmpty, Array.isArray(allCars), allCars.length === 0);

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="year" />
            <CustomFilter title="fuel" />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars.map((car: Car) => (
                <CarCard car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
          </div>
        )}
      </div>
    </main>
  );
}
