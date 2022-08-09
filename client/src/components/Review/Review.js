import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export function Review(props) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [reviews, setReviews ] = useState({reviews: [{
    _id: "1",
    firstName: "",
    text: "testing",
    beachId: "",
  }]
})

const fetchReviews = () => {
  fetch(`/reviews/${props.id}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((responseJson) => {
      setReviews(responseJson);
    });
};
  const onSubmit = (data) => {
    console.log(data);
    fetch(`/reviews/${props.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    fetchReviews();
  }

  useEffect(() => {
    fetchReviews();
  }, [])

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea {...register("text", { required: true })} />
        {errors.text && <span>This field is required</span>}
        <input type="submit" />
      </form>
      <ul className="reviews">
        {reviews.reviews.map((review) => (
          <li className="review" key={review._id}> {review.text} </li>
        ))}
      </ul>
    </div>
  );
}