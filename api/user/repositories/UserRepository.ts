import { Endpoint } from '~/api';
import { FindUserByNicknameResponse } from '~/api/user';

const findByNickname = new Endpoint<
  FindUserByNicknameResponse,
  undefined,
  { nickname: string }
>({
  method: 'GET',
  url: ({ nickname }) => `v1/users/${nickname}`
});

export const users = {
  findByNickname
}
