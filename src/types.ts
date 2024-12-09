export interface App {
  name: string;
  description: string;
  url: string;
  alternative: {
    name: string;
    color: string;
  };
}

export interface Content {
  title: string;
  description: string;
  criteria: string[];
  apps: App[];
}