import { Action } from 'redux';
import { Observable, OperatorFunction } from 'rxjs';
import { filter } from 'rxjs/operators';

type ExtractAction<A, Type> = A extends { readonly type: Type } ? A : never;

export type OfTypeOperatorFunction<ActionsUnion extends Action> =
  <ActionType extends ActionsUnion['type']>(
    actionType: ActionType
  ) => OperatorFunction<ActionsUnion, ExtractAction<ActionsUnion, ActionType>>;

export function exposeOfTypeOperator<ActionUnion extends Action>(): OfTypeOperatorFunction<ActionUnion> {
  return <ActionType extends ActionUnion['type']>(actionType: ActionType | Array<ActionType>) => input$ => input$.pipe(
    filter(action => action.type === actionType)
  ) as Observable<ExtractAction<ActionUnion, ActionType>>;
}
