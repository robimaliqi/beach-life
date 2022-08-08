import React from "react";
import { useForm } from "react-hook-form";

export function Review() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch("/reviews/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }

  // console.log(watch("text")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      <textarea {...register("text", { required: true })} />
      {errors.text && <span>This field is required</span>}
      <input type="submit" />
    </form>
  );
}