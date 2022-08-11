import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export function LogOut() {
  let navigate = useNavigate()
  const { handleSubmit } = useForm();
  const onSubmit = () => {
    fetch(`/signin/destroy`, {
      method: "DELETE",
    });
    navigate('/')
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
          <input type="submit" className="nav-link" value="Log Out"/>
      </form>
    </div>
  );
}