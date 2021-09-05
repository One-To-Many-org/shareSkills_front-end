import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface Authentification {
  email: string;
  password: string
}

export interface State extends EntityState<Authentification> {
}


export const adapter: EntityAdapter<Authentification> = createEntityAdapter<Authentification>({

});
