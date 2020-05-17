import { Ijobs } from "../../typescript/interface/Ijobs";
import Datajob from "../dataJob/dataJob";

const datajob = new Datajob();

class Fetch {
  filter: string[];
  constructor(filter: string[]) {
    this.filter = filter;
  }
  handleFetch() {
    fetch("http://localhost:3001/jobs")
      .then((res) => res.json())
      .then((jobs: Ijobs) => {
        datajob.updateState(jobs, this.filter);
      })
      .catch((error) => console.error(error));
  }
}

export default Fetch;
