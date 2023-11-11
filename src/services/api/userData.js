import { cardPlug } from "../plugs/cards";
import { historyPlug } from "../plugs/history";

export function getCards() {
  return cardPlug;
}

export function getTransactionHistory() {
  return historyPlug;
}