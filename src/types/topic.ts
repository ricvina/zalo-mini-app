export type TopicId =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6";

export interface Topic {
  id: TopicId;
  name: string;
  icon: string;
}
