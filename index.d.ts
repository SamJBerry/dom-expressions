export function wrap<T>(fn: (prev?: T) => T): any;
export function insert(parent: Node, accessor: any, init?: any, marker?: Node): any;
export function createComponent(Comp: (props: any) => any, props: any, dynamicKeys?: string[]): any;
export function delegateEvents(eventNames: string[]): void;
export function clearDelegatedEvents(): void;
export function spread(node: HTMLElement, accessor: any): void;
export function classList(node: HTMLElement, value: { [k: string]: boolean; }): void;
export function when(parent: Node, accessor: () => any, expr: (...args: any[]) => any, options: any, marker?: Node | undefined): void;
export function each(parent: Node, accessor: () => any, expr: (...args: any[]) => any, options: any, marker?: Node | undefined): void;
export function suspend(parent: Node, accessor: () => any, expr: (...args: any[]) => any, options: any, marker?: Node | undefined): void;
export function portal(parent: Node, accessor: () => any, expr: (...args: any[]) => any, options: any, marker?: Node | undefined): void;

declare type AttributeInfo = {
  [key: string]: {
      type: string;
      alias?: string;
  };
};
export const Attributes: AttributeInfo;

export const NonComposedEvents: Set<string>;