import React from "react";
import img1 from "../../Assets/resize/program_we_cover/haldi_night/HN (5).jpg";
import img2 from "../../Assets/resize/program_we_cover/haldi_night/HN (4).jpg";
import img3 from "../../Assets/resize/program_we_cover/haldi_night/HN (3).jpg";

const Haldi = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <div>
        <div
          id="carouselExampleIndicators"
          class="carousel slide relative lg:mx-80 lg:h-[60vh] h-[43vh] md:h-[60vh] md:mx-20"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner relative overflow-hidden">
            <div class="carousel-item active float-left h-full">
              <img src={img1} class="block h-full" alt="Wild Landscape" />
            </div>
            <div class="carousel-item float-left h-full">
              <img src={img2} class="block h-full" alt="Camera" />
            </div>
            <div class="carousel-item float-left h-full">
              <img src={img3} class="block h-full" alt="Exotic Fruits" />
            </div>
          </div>
          <button
            class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              class="carousel-control-prev-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              class="carousel-control-next-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="lg:mx-20 mx-10">
        <h2 className="text-4xl text-center text-amber-500 font-banner mt-10">
          Heldi Night.
        </h2>
        <p className="text-xl text-center text-white font-line mt-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, tenetur
          voluptas quod rem sit vel sapiente dicta iusto unde natus eaque eos
          repellendus deserunt dolores molestiae modi aut dignissimos. Quia!
        </p>
      </div>
    </div>
  );
};

export default Haldi;
