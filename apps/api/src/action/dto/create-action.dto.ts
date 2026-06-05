export interface CreateActionDto {
  date: Date | string;
  requiredPeople: number | string;
  meetingPoint: string;
  additionalInfo: string;
  reportId: string;
  mediaId?: string;
}
