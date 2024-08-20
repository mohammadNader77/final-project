import {Employee} from "./employee";

export interface User {

  employee: Employee;
  submittedBy: string;
  fromDate: string;
  category: string;
  toDate: string;
  status: string;
}
