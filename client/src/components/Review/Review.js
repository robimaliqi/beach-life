import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaStar } from "react-icons/fa";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

export function Review(props) {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

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
    <div>
      <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={
                (hoverValue || currentValue) > index
                  ? colors.orange
                  : colors.grey
              }
              style={{
                marginRight: 10,
                cursor: "pointer",
              }}
            />
          );
        })}
      </div>
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

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300,
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
  },
};
