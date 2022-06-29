import { PersistenceAction } from "./persistenceAction";
export class JsonPersistence implements PersistenceAction {
  persist(input: {}) {
    return true;
  }
}
