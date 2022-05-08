import { createCard } from "./Cards";
import { defaultSetType, personSetType } from "./Sets";

beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0);
});

afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
})

describe("createCard", () => {
  it("should return a card prop", () => {
    const people = ["Alvin Zhao"];
    const worlds = ["Australia"];
    const objects = ["Bubble Wrap"];
    const adjectives = ["Struggling"];
    const natures = ["Watermelon"];
    const randoms = ["Beeline"];
    const defaultSet: defaultSetType = {
      person: people, 
      world: worlds, 
      object: objects, 
      adjective: adjectives, 
      nature: natures, 
      random: randoms
    }

    const expected = {
      person: { value: "Alvin Zhao", spade: true },
      world: { value: "Australia" },
      object: { value: "Bubble Wrap" },
      adjective: { value: "Struggling" },
      nature: { value: "Watermelon" },
      random: { value: "Beeline" },
    };
    const actual = createCard(
      defaultSet,
      0
    );
    expect(actual).toEqual(expected);
  });

  it("should return dude", () => {
    const people = ["some name"]
    const personSet: personSetType = {
      dude: people
    }
    const expected = {
      dude: { value: "some name", spade: true },
    }
    const actual = createCard(
      personSet,
      0
    );
    expect(actual).toEqual(expected)
  })
});
