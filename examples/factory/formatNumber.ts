import { Format } from "./format";

export class FormatNumber implements Format {
  format(input: string): string {
    return input;
  }
}
