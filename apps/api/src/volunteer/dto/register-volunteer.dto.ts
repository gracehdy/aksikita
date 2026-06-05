export class RegisterVolunteerDto {
  actionId!: string;
  fullName!: string;
  email!: string;
  phone!: string;
  healthCondition?: string;
  reason?: string;
}
