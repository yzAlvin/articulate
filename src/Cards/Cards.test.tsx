import { createCard } from "./Cards";

describe("createCard", () => {
  it("should return a card prop", () => {
    const people = ["Alvin Zhao"];
    const worlds = ["Australia"];
    const objects = ["Bubble Wrap"];
    const adjectives = ["Struggling"];
    const natures = ["Watermelon"];
    const randoms = ["Beeline"];

    const expected = {
      person: { value: "Alvin Zhao", spade: true },
      world: { value: "Australia" },
      object: { value: "Bubble Wrap" },
      adjective: { value: "Struggling" },
      nature: { value: "Watermelon" },
      random: { value: "Beeline" },
    };
    const actual = createCard(
      people,
      worlds,
      objects,
      adjectives,
      natures,
      randoms
    );
    expect(actual).toEqual(expected);
  });
});
