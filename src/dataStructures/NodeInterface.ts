export interface NodeInterface {
  name: string;
  weight: number;
  next: NodeInterface | null;
  prev: NodeInterface | null;
}
