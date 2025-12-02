export type WorkType = "成果物" | "CTF参加" | "ハッカソン参加";

export interface BaseWork {
  id: number;
  title: string;
  type: WorkType;
  description: string;
  link?: string;
}

export interface ProductWork extends BaseWork {
  type: "成果物";
  tech: string[];
  status: string;
}

export interface CTFWork extends BaseWork {
  type: "CTF参加";
  tech: string[];
  rank: string;
  totalTeams: number;
  percentage: string;
  date: string;
}

export interface HackathonWork extends BaseWork {
  type: "ハッカソン参加";
  tech?: string[];
  award?: string;
  date: string;
}

export type Work = ProductWork | CTFWork | HackathonWork;
