import React from "react";
import {render, screen} from "@testing-library/react";
import {Legend} from "./Legend";

describe("Legend should", () => {
    it("display keys", () => {
        const keys = ["Person"]
        render(<Legend set={keys}/>)
        expect(screen.getByText('PERSON')).toBeInTheDocument()
    });
})