import { CreateInvitationRequest } from '../requests';
import { Endpoint, ResourceArray, ResourceSingle } from '~/api';
import { Invitation } from '~/api/models';

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

const accept = new Endpoint<undefined, undefined, { id: string }>({
  method: 'POST',
  url: ({ id }) => `v1/invitations/${id}/accept`
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
  accept,
  create,
  delete: deleteInvitation
};
