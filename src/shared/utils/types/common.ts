interface StatusResponse {
  success: boolean;
  reason: string;
}

interface ProfileName {
  firstname: string;
  middlename: string;
  lastname: string;
}

interface PhoneData {
  phone: string;
}

export type { PhoneData, ProfileName, StatusResponse };
