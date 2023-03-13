import type { RegisterEvent } from "./types/RegisterEvent";
import type { SVGAttributes } from "./types/SVGAttributes";

function hyperSVG<
  TagName extends keyof SVGElementTagNameMap,
  Element extends SVGElementTagNameMap[TagName]
>(
  tagName: TagName,
  attributes: SVGAttributes<TagName, Element> = {},
  listenerRegisters: RegisterEvent<Element, SVGElementEventMap>[] = [],
  children: (string | Node)[] = []
) {
  const element = document.createElementNS(
    "http://www.w3.org/2000/svg",
    tagName
  );

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

export { hyperSVG };
