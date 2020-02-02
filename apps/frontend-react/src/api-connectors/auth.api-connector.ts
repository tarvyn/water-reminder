import { API_PREFIX } from '@react-client/shared/constants/api-prefix';
import { parseResponse } from '@react-client/shared/rxjs-operators/parse-response';
import { SignInFormData } from '@react-client/ui/auth/sign-in/sign-in-form/sign-in-form';
import { SignUpFormData } from '@react-client/ui/auth/sign-up/sign-up-form/sign-up-form';
import { UserDto } from '@water-reminder/api-interfaces';
import { Observable } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { first } from 'rxjs/operators';

class AuthApiConnector {
  private url = `${API_PREFIX}/auth`;

  signUp(signUpData: SignUpFormData): Observable<UserDto> {
    return fromFetch(`${this.url}/sign-up`, {
      method: 'POST',
      body: JSON.stringify(signUpData),
      headers: {
        'Content-Type': 'application/json'
      }
    }).pipe(
      parseResponse<UserDto>(),
      first()
    );
  }

  login(loginData: SignInFormData): Observable<UserDto> {
    return fromFetch(`${this.url}/login`, {
      method: 'POST',
      body: JSON.stringify(loginData),
      headers: {
        'Content-Type': 'application/json'
      }
    }).pipe(
      parseResponse<UserDto>(),
      first()
    );
  }

  logout(): Observable<void> {
    return fromFetch(`${this.url}/logout`, { method: 'POST' }).pipe(
      parseResponse<void>(),
      first()
    );
  }
}

export const authApiConnector = new AuthApiConnector();
