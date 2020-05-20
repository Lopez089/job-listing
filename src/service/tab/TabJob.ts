import { Ijob } from "../../typescript/interface/Ijob";

class TabJob {
  ReturnTabJob(job: Ijob) {
    const getTab: [string, string, string[], string[]] = [
      job.role,
      job.level,
      job.languages,
      job.tools,
    ];
    const tabs = getTab.flat();
    return tabs.filter((tab) => tab !== undefined);
  }
}

export default TabJob;
