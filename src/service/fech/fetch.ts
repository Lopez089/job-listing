import { Ijobs } from "../../typescript/interface/Ijobs";
import Datajob from "../dataJob/dataJob";

const datajob = new Datajob();

class Fetch {
  filter: string[];
  setJobs: () => void;
  constructor({ filter, setJobs }: { filter: string[]; setJobs: () => void }) {
    this.filter = filter;
    this.setJobs = setJobs;
  }
  handleFetch() {
    fetch("http://localhost:3001/jobs")
      .then((res) => res.json())
      .then((jobs: Ijobs) => {
        datajob.updateState(jobs, this.filter, this.setJobs);
      })
      .catch((error) => console.error(error));
  }
}

export default Fetch;
