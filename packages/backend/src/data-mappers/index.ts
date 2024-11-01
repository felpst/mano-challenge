import type { CsvClaimType, JsonClaimType } from "lib/types/claims";
import { MethodNotImplementedError } from "~/custom-errors/method-not-implemented.error";

export class FromCsvClaimToJsonClaim {
  public static convert(data: CsvClaimType): JsonClaimType {
    throw new MethodNotImplementedError()
  }
}
