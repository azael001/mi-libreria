import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import MyButton from "../MyButton"; // importo mi componente CustomButton
describe("MyButton component", () => {
 it("El botón se debería renderizar correctamente", () => {
 render(<MyButton text='Hola' txtcolor='white' bgcolor='orange' />);
 const button = screen.getByRole("button");
 expect(button).toBeInTheDocument();
 });
});