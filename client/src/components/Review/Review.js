import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export function Review(props) {
  const { register, handleSubmit, reset, formState, formState: { errors, isSubmitSuccessful } } = useForm();
  const [reviews, setReviews ] = useState({reviews: [{
    _id: "",
    user: {
      firstName: "",
    },
    text: "",
    beachId: "",
    createdAt: "",
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

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ text: "" });
    }
  }, [formState, reset]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea {...register("text", { required: true })} />
        {errors.text && <span>This field is required</span>}
        <input type="submit" />
      </form>
      <ul className="reviews">
        {reviews.reviews.map((review) => (
          <li className="review" key={review._id}>
            <div className="review-author">{review.user.firstName}</div>
            <div className="reviewDate">{formatDate(review.createdAt)}</div>
            <div className="review-text">{review.text} </div>
          </li>
        ))}
      </ul>
    </div>
  );
}