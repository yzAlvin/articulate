import React from 'react';
import {render, screen} from "@testing-library/react";
import {Card} from "./Card";

describe("card should", () => {
    it("render entries", () => {
        const entries = {
            person: 'Sean Connery',
            world: 'Harvard',
            object: 'Christmas Cracker',
            adjective: 'Consulting',
            nature: 'Mosquito',
            random: 'Alien'
        };
        render(<Card {...entries}/>)
        expect(screen.getByText(entries.person)).toBeInTheDocument();
        expect(screen.getByText(entries.world)).toBeInTheDocument();
        expect(screen.getByText(entries.object)).toBeInTheDocument();
        expect(screen.getByText(entries.adjective)).toBeInTheDocument();
        expect(screen.getByText(entries.nature)).toBeInTheDocument();
        expect(screen.getByText(entries.random)).toBeInTheDocument();
    });
})