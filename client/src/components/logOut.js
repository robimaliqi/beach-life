import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export function LogOut() {
  const { handleSubmit } = useForm();
  const onSubmit = () => {
    fetch(`/signin/destroy`, {
      method: "DELETE",
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="submit" className="nav-item" value="Log Out"/>
      </form>
    </div>
  );
}