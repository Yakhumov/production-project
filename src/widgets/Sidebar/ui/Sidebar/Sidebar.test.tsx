import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";
import { renderWithTranslation } from "shared/lib/classNames/tests/renderWithTranslation";

describe("Sidebar", () => {
  test("Test sidebar", () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  test("Test toggle", () => {
    renderWithTranslation(<Sidebar />);
    const togleBtn = screen.getByTestId("sidebar-togle");
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    fireEvent.click(togleBtn);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");  
  });
});
