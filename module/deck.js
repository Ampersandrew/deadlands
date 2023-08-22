import { aCards, mCardMap } from './cards.js';

export class Deck {
  constructor() {
    const cards = Array.from({ length: 54 }, (_, i) => i);

    for (let inx = 0; inx < cards.length; inx += 1) {
      const other = Deck.getRandomInteger(inx, cards.length);

      [cards[inx], cards[other]] = [cards[other], cards[inx]];
    }
    this.cards = cards;
    this.discards = [];
    this.shuffle = false;
  }

  static isCard(card) {
    if (Number.isNaN(card)) {
      return false;
    }

    const intCard = Math.floor(card);

    return intCard >= 0 && intCard <= 53;
  }

  static makeCardArray(hand) {
    if (hand.constructor === Array) {
      return hand.filter((c) => Deck.isCard(c));
    }
    if (Deck.isCard(hand)) {
      return [hand];
    }
    return [];
  }

  // Get a random integer i such that min <= i < max
  static getRandomInteger(min, max) {
    // max and min should both be integer values.
    const fMin = Math.ceil(min);
    const fMax = Math.floor(max);

    // no negatrive numbers
    const factor = fMax - fMin > 0 ? fMax - fMin : 0;

    return Math.floor(Math.random() * factor + fMin);
  }

  // Draw and return a card from the deck. If it is the final card
  // or it is the black joker, then mark the deck as needs shuffled.
  draw() {
    const card = this.cards.shift();

    const takingLast = this.cards.length <= 0;
    const cardIsBlackJoker = card === 52;

    if (takingLast || cardIsBlackJoker) {
      this.shuffle = true;
    }

    return card;
  }

  /**
   * @param {*} hand - A card (integer in range 0 .. 53), or an array of cards
   * @returns boolean indication of whether any cards were returned to the
   * deck's discard pile.
   *
   * Return a card or cards to the discard pile. Do not shuffle these into the
   * deck.
   */

  discard(hand) {
    const cards = Deck.makeCardArray(hand);

    // transition though a set to eliminate dupilcates.
    this.discards = Array.from(
      new Set([...this.discards, ...Deck.makeCardArray(hand)])
    );

    return cards.length > 0;
  }

  /**
   * Hand is an array of cards that are currently in other places.
   * Make sure that they do not appear in either the cards or discards
   * of this deck.
   * @param {*} hand
   */
  prune(hand) {
    const handSet = new Set(Deck.makeCardArray(hand));

    // Remove anything from cards or discards that is in hand
    this.cards = this.cards.filter((e) => !handSet.has(e));
    this.discards = this.discards.filter((e) => !handSet.has(e));

    return handSet;
  }

  /**
   * Hand is an array of cards that are currently in other places.
   * Make sure that they do not appear in either the cards or discards
   * of this deck.
   *
   * Add any cards that are not in this.cards, this.discards or hand
   * to this.discards
   * @param {*} hand
   */
  reconcile(hand) {
    // remove any duplicates in cards or discards
    this.cards = Array.from(new Set([...this.cards]));
    this.discards = Array.from(new Set([...this.discards]));

    // Remove any cards from cards and discards that are in the hand
    const handSet = this.prune(hand);

    const deckSet = new Set([...this.cards, ...this.discards, ...handSet]);

    // Add anything missing to this.discards
    if (deckSet.size !== 54) {
      this.discards.push(
        ...Array.from({ length: 54 }, (_, i) => i).filter(
          (e) => !deckSet.has(e)
        )
      );
    }
  }

  /**
   * Add the discards back into the cards array, then shuffle the deck.
   * @returns nothing
   */
  recycle() {
    if (this.discards.length <= 0) {
      return;
    }

    const cards = [...this.cards, ...this.discards];

    for (let inx = 0; inx < cards.length; inx += 1) {
      const other = Deck.getRandomInteger(inx, cards.length);

      [cards[inx], cards[other]] = [cards[other], cards[inx]];
    }

    this.discards = [];
    this.shuffle = false;
    this.cards = cards;
  }

  /**
   * This should be checked at the start of a combat round.
   */
  get needsShuffled() {
    return this.shuffle;
  }

  /**
   * @returns boolean indication of whether there is a card available to draw.
   *
   * It's possible to run out of cards, if this returns false, all spent cards
   * should be gathered from the combatants drawing from this deck, discarded
   * here, and this deck recycled.
   */

  get canDraw() {
    return this.cards.length > 0;
  }

  // Turn an array of card integers into a string of comma separated card symbols
  // e.g. [0, 3, 51] -> '2\u2663,2\u2660,A\u2660'
  // 2 of clubs; 2 of spades, ace of spades
  static #makeFieldString(arr) {
    const symbols = arr.map((x) => (x >= 0 && x <= 53 ? aCards[x].symbol : ''));
    return symbols.join(',');
  }

  /**
   * @returns A string representing this deck of cards.
   */
  toField() {
    const fields = [Deck.#makeFieldString(this.cards)];
    fields.push(Deck.#makeFieldString(this.discards));

    return fields.join('|');
  }

  /**
   * @param {*} field
   *
   * Turns a string representation back into a deck.
   */
  fromField(field) {
    const parts = field.split('|');

    if (typeof parts[0] !== 'undefined' && parts[0] !== '') {
      this.cards = parts[0].split(',').map((s) => mCardMap.get(s));
    }

    if (typeof parts[1] !== 'undefined' && parts[1] !== '') {
      this.discards = parts[1].split(',').map((s) => mCardMap.get(s));
    }

    // If the black joker is not available to draw, or there are no cards to
    // draw, this deck needs shuffled.
    this.shuffle = this.cards.indexOf(52) === -1 || this.cards.length <= 0;
  }
}
