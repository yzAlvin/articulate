import React from "react";
import {render, screen} from "@testing-library/react";
import {Entry} from "./Entry";

describe("Entry should", () => {
    it("display category with entry", () => {
        render(<Entry category={'Person'} value={'Sean Connery'}/>)
        expect(screen.getByText('P')).toBeInTheDocument()
    });
    it("display spade when spade set", () => {
        render(<Entry category={'Object'} value={'Ball'} spade={true}/>)
        expect(screen.getByText(`♠`)).toBeInTheDocument()
    });
    it("not display spade when spade not set", () => {
        render(<Entry category={'Object'} value={'Ball'} spade={false}/>)
        expect(screen.queryByText(`♠`)).not.toBeInTheDocument()
    });
})