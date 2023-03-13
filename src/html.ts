import type { Attributes } from "./types/Attributes";
import type { RegisterEvent } from "./types/RegisterEvent";

function hyperHTML<
  TagName extends keyof HTMLElementTagNameMap,
  Element extends HTMLElementTagNameMap[TagName]
>(
  tagName: TagName,
  attributes: Attributes<Element> = {},
  listenerRegisters: RegisterEvent<Element, HTMLElementEventMap>[] = [],
  children: (string | Node)[] = []
) {
  const element = document.createElement(tagName);

  for (const attributeName in attributes)
    element.setAttribute(
      attributeName,
      // @ts-ignores
      attributes[attributeName]
    );

  for (const listenerRegister of listenerRegisters)
    element.addEventListener(
      listenerRegister.type,
      // @ts-ignore
      listenerRegister.listener,
      listenerRegister.options
    );

  element.replaceChildren(...children);

  return element;
}

export { hyperHTML };
