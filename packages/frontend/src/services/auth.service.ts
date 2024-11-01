import { SignInSchemaType } from "~/schema/auth";
import { UserType } from "~/types/auth";
import { fetchApi } from "~/utils/fetch-api";

export function postSignin(payload: SignInSchemaType): Promise<{ message: string; data: string }> {
  return fetchApi("/auth/sign-in", { method: "POST", body: payload });
}

export function getMe(): Promise<{ message: string; data: UserType }> {
  return fetchApi("/auth/me");
}
