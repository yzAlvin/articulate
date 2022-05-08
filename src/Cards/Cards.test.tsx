import { createCard } from "./Cards";
import { defaultSetType, wipSetType } from "./Sets";

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
    const wipSet: wipSetType = {
      twitch: ["xqc"],
      anime: ["naruto"],
      game: ["cs"],
      fastFood: ["red rooster"],
    }
    const expected = {
      twitch: { value: wipSet.twitch[0], spade: true },
      anime: { value:wipSet.anime[0]},
      game: { value: wipSet.game[0]},
      fastFood: { value: wipSet.fastFood[0]},
    }
    const actual = createCard(
      wipSet,
      0
    );
    expect(actual).toEqual(expected)
  })
});
