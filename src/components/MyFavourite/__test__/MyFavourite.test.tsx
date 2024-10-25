import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import MyFavourite from "../MyFavourite"; // importo mi componente MyFavourite

describe("MyFavourite component", () => {
  it("El botón con ícono se debería renderizar correctamente", () => {
    render(<MyFavourite bgcolor="red" />);
    const Icon = screen.getByRole("Icon");
    expect(Icon).toBeInTheDocument();
  });
});