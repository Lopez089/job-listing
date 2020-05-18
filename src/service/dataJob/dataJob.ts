import { Ijob } from "../../typescript/interface/Ijob";
import { Ijobs } from "../../typescript/interface/Ijobs";
import Tabjob from "../tab/TabJob";

const tabjob = new Tabjob();

class DataJob {
  updateState(jobs: Ijobs, filters: string[], setJobs: (jobs: Ijobs) => void) {
    let jobsfilter: any[] = []; //me guarda los trabajos filtrados

    jobs.forEach((job: Ijob) => {
      // recorrer todos los trabajos
      const tabsjob = tabjob.ReturnTabJob(job); // retorna todos lo tap

      filters.forEach((filter: string) => {
        tabsjob.filter((tab: string) =>
          tab === filter ? jobsfilter.push(job) : undefined
        );
      });
      //console.log(jobsfilter);
    });
    setJobs(jobs);
    //filters.length === 0 ? setJobs(jobs) : this.setJobs(jobsfilter);
    jobsfilter = [];
  }
}

export default DataJob;
