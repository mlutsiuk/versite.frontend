import { Invitation } from '~/api/models';

export type CreateInvitationRequest = Pick<Invitation, 'student_id' | 'email'>;
