import React from "react";
import {render, screen} from "@testing-library/react";
import {Footer} from "./Footer";

describe("Footer should", () => {
    it("display name", () => {
        render(<Footer/>)
        expect(screen.getByText('Alvin Zhao')).toBeInTheDocument()
        expect(screen.getByText('2022')).toBeInTheDocument()
    });
})