import { ViewGroup } from "../enums/view.enum";



export interface View {
  _id: string;
  viewGroup: ViewGroup;
  memberId: string;
  viewRefId: string;
  createAt: Date;
  updateAt: Date;
}

export interface ViewInput {
  memberId: string | null;
  viewRefId: string;
  viewGroup: ViewGroup;
}
