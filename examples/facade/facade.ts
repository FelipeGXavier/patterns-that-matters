import { FileReader } from "./fileReaders";
import { SmtpService } from "./smtpService";
import { WebService } from "./webservice";

export type FacadeParams = {
  reader: FileReader;
  smtpService: SmtpService;
  webService: WebService;
};

export class Facade {
  private readonly reader: FileReader = new FileReader();
  private readonly smtpService: SmtpService = new SmtpService();
  private readonly webSerivce: WebService = new WebService();

  /* You may create the instances inside the Facade made him more coupled or inject them*/
  //   constructor(params: FacadeParams) {
  //     this.reader = params.reader;
  //     this.smtpService = params.smtpService;
  //     this.webSerivce = params.webService;
  //   }

  operation(path: string): void {
    // Do some operations
    const result = this.reader.read(path);
    if (!result) return;
    const emailSent = this.smtpService.send({ email: "john.doe@example.com" });
    if (emailSent) {
      this.webSerivce.request({ fallback: 10 });
    }
  }
}
