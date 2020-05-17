import { Ijob } from "../../typescript/interface/Ijob";

class TabJob {
  ReturnTabJob(job: Ijob) {
    let arrayTab = [job.role, job.level, job.languages, job.tools];
    return arrayTab.flat();
  }
}

export default TabJob;
