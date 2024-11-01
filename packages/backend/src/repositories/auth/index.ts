import type { UserType } from "lib/types/auth";

export interface IAuthRepository {
  getUserByEmail(email: string): Promise<UserType | undefined>;
}
