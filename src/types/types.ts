export interface Task {
  title: string;
  done: boolean;
  category?: Category;
}

export type Category = "general" | "work" | "sport" | "dog" | "social";
