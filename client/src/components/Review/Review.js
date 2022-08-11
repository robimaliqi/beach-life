import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Emoji } from "../Emojis/Emojis";

export function Review(props) {
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  const [reviews, setReviews] = useState({
    reviews: [
      {
        _id: "",
        user: {
          firstName: "",
        },
        text: "",
        beachId: "",
        createdAt: "",
      },
    ],
  });

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
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ text: "" });
    }
  }, [formState, reset]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <div className="review-container">
      <p className="review-p">
        Have a look at the lovely reviews about this beach{" "}
      </p>
      <ul className="reviews-list">
        {reviews.reviews.map((review) => (
          <li className="review" key={review._id}>
            <div className="review-author">
              <Emoji symbol="👤  " label="bust in silhouette" />
              {review.user.firstName}
            </div>

            <div className="review-date">{formatDate(review.createdAt)}</div>
            <div className="review-card">
              <div className="review-text">{review.text} </div>
            </div>
          </li>
        ))}
      </ul>
      {props.user && (
        <div className="form-wrapper">
          <form onSubmit={handleSubmit(onSubmit)}>
            <textarea
              className="input"
              id="reviews-input"
              {...register("text", { required: true })}
            />
            {errors.text && (
              <span className="require-message">This field is required</span>
            )}
            <input class="btn" id="review-btn" type="submit" />
          </form>
        </div>
      )}
      {!props.user && (
        <div className="login-advice">
          <p className="review-p">
            If you would like to leave a review, you will need to log in or
            register and create an account.
          </p>
        </div>
      )}
    </div>
  );
}
