import { Endpoint, ResourceSingle } from '~/api';
import { User } from '~/api/models';

const findByNickname = new Endpoint<
  ResourceSingle<User>,
  undefined,
  { nickname: string }
>({
  method: 'GET',
  url: ({ nickname }) => `v1/users/${nickname}`
});

export const users = {
  findByNickname
};
