import { ResponseSingleResource } from '~/api';
import { User } from '~/api/user';

export type FindUserByNicknameResponse = ResponseSingleResource<User>;
