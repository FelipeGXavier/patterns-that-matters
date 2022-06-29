import { JsonPersistence } from "./jsonPersistence";
import { CsvPersistence } from "./csvPersistence";
import { PersistenceManger } from "./persistenceManager";

const jsonPersistence = new JsonPersistence();
const csvPersistence = new CsvPersistence();

const persistenceManager = new PersistenceManger(jsonPersistence);
persistenceManager.execute({ foo: "bar" });
