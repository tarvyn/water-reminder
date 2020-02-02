interface PostMessageEvent extends MessageEvent {
  readonly data: {
    readonly type: 'drink-dose';
  };
}
