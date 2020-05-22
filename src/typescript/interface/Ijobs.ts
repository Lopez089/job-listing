export interface Ijobs {
  filter(arg0: (job: import("./Ijob").Ijob) => void): any;
  map(arg0: (job: import("./Ijob").Ijob) => void);
  forEach(arg0: (job: import("./Ijob").Ijob) => void);
  [index: number]: {
    company: string;
    contract: string;
    featured: boolean;
    id: number;
    languages: string[];
    level: string;
    location: string;
    logo: string;
    new: boolean;
    position: string;
    postedAt: string;
    role: string;
  };
}
