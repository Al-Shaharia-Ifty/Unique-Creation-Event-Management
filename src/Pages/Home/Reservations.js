// import React, { useState } from "react";
import bg from "../../Assets/logo/lines_section4.jpg";
import img from "../../Assets/images/reserved_sec9.jpg";
import logo from "../../Assets/logo/Design_element.png";
import { useForm } from "react-hook-form";
// import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const Reservations = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // const [date, setDate] = useState(new Date());

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
      }}
    >
      <div className="lg:flex block pt-36 pb-80">
        <div className="lg:w-1/2 w-full px-10 text-center">
          <img
            src={img}
            alt=""
            className="mx-auto border-4 border-white rounded-tr-[100px] rounded-bl-[100px] hover:scale-110 transition ease-linear duration-200"
          />
        </div>
        <div className="lg:w-1/2 w-full px-10">
          <img
            src={logo}
            className="mx-auto lg:mt-5 mt-10 hover:scale-110 transition ease-linear duration-200"
            alt=""
          />
          <h1 className="text-3xl lg:text-6xl font-banner text-center mt-5 ">
            Make Reservations
          </h1>
          <p className="text-xl font-line text-center mt-5">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed doeiusm
            tempor incididunt
          </p>
          <div>
            <form
              className="grid grid-cols-2 gap-8 mt-8"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input rounded-full w-full max-w-xs"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is required",
                    },
                  })}
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="input rounded-full w-full max-w-xs"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid email",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="col-span-2">
                {/* <DayPicker mode="single" selected={date} onSelect={setDate} /> */}
                <select className="select w-full rounded-full">
                  <option disabled selected>
                    Event
                  </option>
                  <option>Homer</option>
                  <option>Marge</option>
                  <option>Bart</option>
                  <option>Lisa</option>
                  <option>Maggie</option>
                </select>
              </div>
              <input
                className="btn w-2/3 mx-auto col-span-2"
                value="Make Reservations"
                type="submit"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservations;
