import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import MyFavouriteBorder from "../MyFavouriteBorder"; 

describe("MyFavouriteBorder component", () => {
  it("El botón con ícono se debería renderizar correctamente", () => {
    render(<MyFavouriteBorder bgcolor="red" />);
    const Icon = screen.getByRole("Icon");
    expect(Icon).toBeInTheDocument();
  });
});