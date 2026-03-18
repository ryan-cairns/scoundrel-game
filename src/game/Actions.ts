import type { Card, GameState } from "../types/index.ts";

const VALUE_MAP: Record<string, number> = {
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 6,
  "7": 7,
  "8": 8,
  "9": 9,
  "10": 10,
  Jack: 11,
  Queen: 12,
  King: 13,
  Ace: 14,
};

export function numVal(card: Card): number {
  return VALUE_MAP[card.value];
}

export function fightMonster(state: GameState, card: Card): GameState {
  const monsterVal = numVal(card);
  let damage = monsterVal;

  if (state.weapon) {
    const weaponVal = numVal(state.weapon.card);
    const lastMonsterVal = state.weapon.lastMonster;
    if (lastMonsterVal === null || monsterVal <= lastMonsterVal) {
      damage = Math.max(0, monsterVal - weaponVal);
      return {
        ...state,
        hp: Math.max(0, state.hp - damage),
        weapon: { ...state.weapon, lastMonster: monsterVal },
        usedCards: [...state.usedCards, card],
      };
    }
  }

  return {
    ...state,
    hp: Math.max(0, state.hp - damage),
    usedCards: [...state.usedCards, card],
  };
}

export function takePotion(state: GameState, card: Card): GameState {
  const heal = numVal(card);
  return {
    ...state,
    hp: Math.min(state.hp + heal, state.maxHp),
    usedCards: [...state.usedCards, card],
  };
}

export function takeWeapon(state: GameState, card: Card): GameState {
  return {
    ...state,
    weapon: {
      card,
      lastMonster: null,
    },
    usedCards: [...state.usedCards, card],
  };
}
