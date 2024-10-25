import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import ComponentPACP from "../ComponentPACP";
describe("MyButton component", () => {
 it("El botón se debería renderizar correctamente", () => {
 render(<ComponentPACP text='Hola' txtcolor='white' bgcolor='orange' />);
 const button = screen.getByRole("button");
 expect(button).toBeInTheDocument();
 });
});
