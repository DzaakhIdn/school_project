import { RefObject } from "react";

/**
 * Custom hook to get the bounding client rect and scroll dimensions of a DOM element.
 *
 * @param {RefObject<T | null>} [inputRef] - Optional ref object to the target element.
 * @param {string} [eventType] - Optional event type to trigger updates (e.g., 'scroll', 'resize').
 * @returns {UseClientRectReturn<T>} - Object containing the bounding rect, scroll dimensions, and ref to the element.
 */
type ScrollElValue = {
  scrollWidth: number;
  scrollHeight: number;
};
type DOMRectValue = {
  top: number;
  right: number;
  bottom: number;
  left: number;
  x: number;
  y: number;
  width: number;
  height: number;
};
type UseClientRectReturn<T extends HTMLElement = HTMLElement> = DOMRectValue &
  ScrollElValue & {
    elementRef: RefObject<T>;
  };
declare function useClientRect<T extends HTMLElement = HTMLElement>(
  inputRef?: RefObject<T | null>,
  eventType?: string
): UseClientRectReturn<T>;

export { type UseClientRectReturn, useClientRect };
