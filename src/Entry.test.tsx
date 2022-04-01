import React from "react";
import {render, screen} from "@testing-library/react";
import {Entry} from "./Entry";

describe("Entry should", () => {
    it("display category with entry", () => {
        render(<Entry category={'Person'} value={'Sean Connery'}/>)
        expect(screen.getByText('P')).toBeInTheDocument()
    });
})