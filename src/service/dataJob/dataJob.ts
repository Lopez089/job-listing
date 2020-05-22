import { Ijob } from "../../typescript/interface/Ijob";
import { Ijobs } from "../../typescript/interface/Ijobs";
import Tabjob from "../tab/TabJob";

const tabjob = new Tabjob();

class DataJob {
  updateState(jobs: Ijobs, filters: string[], setJobs: (jobs: Ijobs) => void) {
    let jobsfilter: Ijobs | any;

    filters.length === 0
      ? setJobs(jobs)
      : (jobsfilter = jobs.filter((job: Ijob) => {
          const tabsJob: string[] = tabjob.ReturnTabJob(job);
          let hasTab = filters.some((filter) => tabsJob.includes(filter));

          return hasTab;
        }));

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    jobsfilter.length === 0 ? undefined : setJobs(jobsfilter);
  }
}

export default DataJob;
