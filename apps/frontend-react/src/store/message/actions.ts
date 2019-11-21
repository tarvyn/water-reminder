import { Message } from '@water-reminder/api-interfaces';
import { ActionCreator } from 'redux';

export const GET_MESSAGE = 'Get message';
export const GET_MESSAGE_SUCCESS = 'Get message success';
export const GET_MESSAGE_ERROR = 'Get message error';

export const getMessage: ActionCreator<void> = () => ({
  type: GET_MESSAGE
});

export const getMessageSuccess: ActionCreator<{ readonly payload: Message }> =
  (message: Message) => ({
    type: GET_MESSAGE_SUCCESS,
    payload: message
  });

export const getMessageError: ActionCreator<{ readonly payload: string }> =
  (errorMessage: string) => ({
    type: GET_MESSAGE_ERROR,
    payload: errorMessage
  });
