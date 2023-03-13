type RegisterEvent<Element, EventMap extends ElementEventMap> = {
  [EventType in keyof EventMap]: {
    type: EventType;
    listener: (this: Element, ev: EventMap[EventType]) => any;
    options?: boolean | AddEventListenerOptions;
  };
}[keyof EventMap];

type RegisterEvent2<Element, EventMap extends ElementEventMap> = {
  [EventType in keyof EventMap]: [
    type: EventType,
    listener: (this: Element, ev: EventMap[EventType]) => any,
    options?: boolean | AddEventListenerOptions
  ];
}[keyof EventMap];

export type { RegisterEvent, RegisterEvent2 };
