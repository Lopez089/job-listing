import { Ijob } from "../../typescript/interface/Ijob";
import { Ijobs } from "../../typescript/interface/Ijobs";
import Tabjob from "../tab/TabJob";

const tabjob = new Tabjob();

class DataJob {
  updateState(jobs: Ijobs, filters: string[]) {
    let jobsfilter: any[] = []; //me guarda los trabajos filtrados

    jobs.forEach((job: Ijob) => {
      // recorrer todos los trabajos
      const tabsjob = tabjob.ReturnTabJob(job); // retorna todos lo tap

      filters.forEach((filter: string) => {
        tabsjob.filter((tab: string) =>
          tab === filter ? jobsfilter.push(job) : undefined
        );
        return;
      });
      console.log(jobsfilter);
    });

    //filters.length === 0 ? setJobs(jobs) : setJobs(jobsfilter);
    jobsfilter = [];
  }
}

export default DataJob;
