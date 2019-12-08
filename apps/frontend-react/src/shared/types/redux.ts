import { InferValueTypes } from '@react-client/shared/types/utilities';
import { Action as ReduxAction } from 'redux';

export interface Action<Payload extends object = object> extends ReduxAction {
  readonly payload?: Payload;
}

export interface ActionCreators {
  readonly [prop: string]: (...args: Array<unknown>) => Action;
}

export type WithUserIdInPayload<T extends Action> = T extends { readonly payload: object }
  ? T & { readonly payload: T['payload'] & { readonly userId?: string } }
  : T;

export type ExtractActionsType<T extends ActionCreators> =
  WithUserIdInPayload<ReturnType<InferValueTypes<T>>>;
