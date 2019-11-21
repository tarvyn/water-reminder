// TODO: remove
export interface Message {
  readonly message: string;
}

export interface UserDto {
  readonly email: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly imageUrl: string;
  readonly provider: string;
  readonly thirdPartyId: string;
}
