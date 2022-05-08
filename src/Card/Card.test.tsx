import React from 'react';
import {render, screen} from "@testing-library/react";
import {Card, CardProps} from "./Card";

describe("card should", () => {
    it("render entries", () => {
        const entries: CardProps = {
            person: {value: 'Sean Connery'},
            world: {value: 'Harvard'},
            object: {value: 'Christmas Cracker'},
            adjective: {value: 'Consulting'},
            nature: {value: 'Mosquito'},
            random: {value: 'Alien'}
        };
        render(<Card {...entries}/>)
        expect(screen.getByText(entries.person.value)).toBeInTheDocument();
        expect(screen.getByText(entries.world.value)).toBeInTheDocument();
        expect(screen.getByText(entries.object.value)).toBeInTheDocument();
        expect(screen.getByText(entries.adjective.value)).toBeInTheDocument();
        expect(screen.getByText(entries.nature.value)).toBeInTheDocument();
        expect(screen.getByText(entries.random.value)).toBeInTheDocument();
    });
})