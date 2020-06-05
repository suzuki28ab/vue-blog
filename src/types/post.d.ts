import { Timestamp } from "@/plugins/firebase";

export interface PostData {
  id: string;
  title: string;
  content: string;
  createdAt: Timestamp;
  tags: string[];
  category: string;
}
