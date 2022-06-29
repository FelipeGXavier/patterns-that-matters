// import { FileReader } from "./fileReaders";
// import { SmtpService } from "./smtpService";
// import { WebService } from "./webservice";

// function operation() {
//   const s = new SmtpService();
//   const f = new FileReader();
//   const w = new WebService();
//   const path = "";
//   const result = f.read(path);
//   if (!result) return;
//   const emailSent = s.send({ email: "john.doe@example.com" });
//   if (emailSent) {
//     w.request({ fallback: 10 });
//   }
// }

import { Facade } from "./facade";

const f = new Facade();
f.operation("");
