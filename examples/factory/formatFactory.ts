import { Format } from "./format";
import { FormatType } from "./formatEnum";
import { FormatNumber } from "./formatNumber";
import { FormatString } from "./formatString";

export class FormatFactory {
  static getInstance(type: FormatType): Format {
    switch (type) {
      case FormatType.NUMBER:
        return new FormatNumber();
      case FormatType.STRING:
        return new FormatString();
      default:
        throw new Error("Invalid type");
    }
  }
}
