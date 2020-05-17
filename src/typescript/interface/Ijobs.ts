export interface Ijobs {
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
