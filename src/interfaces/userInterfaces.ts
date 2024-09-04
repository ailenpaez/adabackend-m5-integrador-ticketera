export interface UserSchema {
    username: string;
    email: string;
    password: string;
    level?: number;
    status?: string;
    position?: string[];
    country?: string;
    id: string;
  }

