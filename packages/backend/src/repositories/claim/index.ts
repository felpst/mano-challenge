
export interface IClaimRepository {
  list(): Promise<string[]>;
  save(): Promise<boolean>;
  find(id: string): Promise<string>;
  delete(id: string): Promise<boolean>;
  update(id: string, content: string): Promise<boolean>;
  listByUserId(userId: number): Promise<string[]>;
  search(term: string): Promise<string[]>;
}

