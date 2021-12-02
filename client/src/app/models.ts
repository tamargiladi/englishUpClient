
export interface Teacher {
  firstName:string;
  lastName:string;
  info?:string;
  notifications?: number;
}

export interface Student {
  firstName:string;
  lastName:string;
}

export interface TeachersPayload {
  teachers:Teacher[]
}

