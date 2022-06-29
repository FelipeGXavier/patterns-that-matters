import { PersistenceAction } from "./persistenceAction";

export class PersistenceManger {
  constructor(private readonly persistenceAction: PersistenceAction) {}

  execute(input: {}) {
    console.log("Do some logic");
    this.persistenceAction.persist(input);
  }
}
