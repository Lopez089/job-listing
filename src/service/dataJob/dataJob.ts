import { Ijob } from "../../typescript/interface/Ijob";
import { Ijobs } from "../../typescript/interface/Ijobs";
import Tabjob from "../tab/TabJob";

const tabjob = new Tabjob();

class DataJob {
  updateState(jobs: Ijobs, filters: string[], setJobs: (jobs: Ijobs) => void) {
    filters.length === 0
      ? setJobs(jobs)
      : jobs.forEach((job: Ijob) => {
          //recorrer todos los trabajos
          const tabsJob = tabjob.ReturnTabJob(job); // retorna todos lo tab de un trabajo
          //let hasTab: Boolean;
          //recorer el filtro
          //   tabsJob.map((tabJob) =>
          //     // hasTab = filters.includes(tabJob)
          //     console.log(tabJob)
          //   );

          // setJobs(jobsfilter);
          //jobsfilter = [];
          //console.log(hasTab);
        });

    //setJobs(jobs);
  }
}

export default DataJob;
