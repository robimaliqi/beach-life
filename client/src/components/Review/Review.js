import React from "react";
import { useForm } from "react-hook-form";

export function Review(props) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch(`/reviews/${props.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }

  // console.log(watch("text")); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <textarea {...register("text", { required: true })} />
      {errors.text && <span>This field is required</span>}
      <input type="submit" />
    </form>
  );
}