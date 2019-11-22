import { InferValueTypes } from '@react-client/shared/types/utilities';
import { Message } from '@water-reminder/api-interfaces';

export enum ActionType {
  GetMessage = '[message] Get message',
  GetMessageSuccess = '[message] Get message success',
  GetMessageError = '[message] Get message error',
}

export const messageActions = {
  getMessage: () => {
    return {
      type: ActionType.GetMessage,
    } as const;
  },
  getMessageSuccess: (message: Message) => {
    return {
      type: ActionType.GetMessageSuccess,
      payload: { message }
    } as const;
  },
  getMessageError: (errorMessage: string) => {
    return {
      type: ActionType.GetMessageError,
      payload: { errorMessage }
    } as const;
  },
};

export type Actions = ReturnType<InferValueTypes<typeof messageActions>>;
