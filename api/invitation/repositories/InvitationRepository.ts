import { Endpoint, ResourceArray, ResourceSingle } from '~/api';
import { Invitation } from '~/api/models';
import { CreateInvitationRequest } from '../requests';

const all = new Endpoint<ResourceArray<Invitation>>({
  method: 'GET',
  url: 'v1/invitations'
});

const find = new Endpoint<
  ResourceSingle<Invitation>,
  undefined,
  { id: string }
>({
  method: 'GET',
  url: ({ id }) => `v1/invitations/${id}`
});

const create = new Endpoint<
  ResourceSingle<Invitation>,
  CreateInvitationRequest
>({
  method: 'POST',
  url: 'v1/invitations'
});

const deleteInvitation = new Endpoint<undefined, undefined, { id: string }>({
  method: 'DELETE',
  url: ({ id }) => `v1/invitations/${id}`
});

export const invitations = {
  all,
  find,
  create,
  delete: deleteInvitation
};
