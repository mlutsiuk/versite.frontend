import { ResponseSingleResource } from '~/api';
import { UserModel } from '~/api/user';

export type FindUserByNicknameResponse = ResponseSingleResource<UserModel>;
