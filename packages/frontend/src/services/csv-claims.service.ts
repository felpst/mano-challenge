import { RowType } from "~/stores/claim-csv.store";
import { fetchApi } from "~/utils/fetch-api";

export function postCsvClaims(rows: RowType[]): Promise<void> {
  return fetchApi("/claims", { method: "POST", body: rows });
}
