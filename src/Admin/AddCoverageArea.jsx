import React from "react";
import { useForm } from "react-hook-form";
import instance from "../Axios/instance";

const AddCoverageArea = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
   
    const payload = {
      district: data.district,
      coveredArea: data.coveredArea,
      latitude: parseFloat(data.latitude),
      longitude: parseFloat(data.longitude),
    };

    console.log("Coverage Area Data:", payload);

    instance
      .post("/coverage", payload)
      .then(() => {
        alert("Coverage area added successfully ✅");
        reset();
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to add coverage area ❌");
      });
  };

  return (
    <div className="flex justify-center  px-5 md:px-15 min-h-screen">
      <div className="w-full   p-6 rounded shadow">
        <h2 className="text-2xl font-bold text-center mb-6 ">
          Add Coverage Area
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
     
          <div className="flex flex-col">
          <input
            placeholder="District"
            className="input input-bordered w-full"
            {...register("district", { required: true })}
          />
            {errors.district && (
              <p className="text-red-500 text-sm">District is required</p>
            )}
          </div>

         
          <div className="flex flex-col">
          <input
            placeholder="Covered Areas "
            className="input input-bordered w-full"
            {...register("coveredArea", { required: true })}
          />
            {errors.coveredArea && (
              <p className="text-red-500 text-sm">
                Covered Areas are required
              </p>
            )}
          </div>
         

          {/* Latitude */}
          <div className="flex flex-col">
          <input
            type="number"
            step="any"
            placeholder="Latitude"
            className="input input-bordered w-full"
            {...register("latitude", { required: true })}
          />
            {errors.latitude && (
                <p className="text-red-500 text-sm">Latitude is required</p>
                )}
            </div>

          {/* Longitude */}
          <div className="flex flex-col">
          <input
            type="number"
            step="any"
            placeholder="Longitude"
            className="input input-bordered w-full"
            {...register("longitude", { required: true })}
          />
            {errors.longitude && (
                <p className="text-red-500 text-sm">Longitude is required</p>
                )}
            </div>  

          <button className="btn btn-neutral col-span-full w-full mt-4">
            Add Coverage Area
          </button>
        </form>
      </div>
      
    </div>
  );
};

export default AddCoverageArea;