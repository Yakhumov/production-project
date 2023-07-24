import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";
import { componentRender } from "shared/lib/tests/componenRender";

describe("Sidebar", () => {
  test("Test sidebar", () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  test("Test toggle", () => {
    componentRender(<Sidebar />);
    const togleBtn = screen.getByTestId("sidebar-togle");
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    fireEvent.click(togleBtn);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");  
  });
});
