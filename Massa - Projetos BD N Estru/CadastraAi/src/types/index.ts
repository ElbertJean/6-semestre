export interface ItemField {
  id: string;
  key: string;
  value: string;
}

export interface Item {
  id: string;
  title: string;
  fields: ItemField[];
  createdAt: string;
}
