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
        <div className="nav-item">
          <input type="submit" className="nav-link" value="Log Out"/>
        </div>
      </form>
    </div>
  );
}