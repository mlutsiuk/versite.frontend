import { Endpoint, ResourceArray, ResourceSingle } from '~/api';
import { Invitation } from '~/api/models';
import { CreateInvitationRequest } from '../requests';

const all = new Endpoint<ResourceArray<Invitation>>({
  method: 'GET',
  url: 'v1/invitations'
});

const my = new Endpoint<ResourceArray<Invitation>>({
  method: 'GET',
  url: 'v1/invitations/my'
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
  my,
  find,
  create,
  delete: deleteInvitation
};
