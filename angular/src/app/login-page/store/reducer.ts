import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface LoginState  {
  pending: boolean;
  error: string | null;
}

export interface AuthState extends EntityState<User> {
  isAuthentificated: boolean;
  accessToken: string | null;
}



export const userAdapter: EntityAdapter<User> = createEntityAdapter<User>({});
