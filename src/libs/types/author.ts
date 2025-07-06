export interface Author {
  _id: string;
  authorNick: string;
  authorImage: string;
  authorDesc: string;
  authorInterview: AuthorInterviewItem[];
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthorInput {
  authorNick: string;
  authorImage: string;
  authorDesc: string;
  authorInterview: AuthorInterviewItem[];
}

export interface AuthorUpdateInput {
  authorNick?: string;
  authorImage?: string;
  authorDesc?: string;
  authorInterview?: AuthorInterviewItem[];
}

export interface AuthorInterviewItem {
  _id: string;
  question: string;
  answer: string;
}
