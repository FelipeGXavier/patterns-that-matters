import { Format } from "./format";

export class FormatString implements Format {
  format(input: string): string {
    return input;
  }
}
