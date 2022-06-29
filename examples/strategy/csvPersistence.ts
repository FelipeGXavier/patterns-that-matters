import { PersistenceAction } from "./persistenceAction";
export class CsvPersistence implements PersistenceAction {
  persist(input: {}) {
    return true;
  }
}
