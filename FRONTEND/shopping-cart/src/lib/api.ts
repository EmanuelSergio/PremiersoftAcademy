import axios from "axios";

export interface Produto {
  id: number;
  name: string;
  price: number;
  image: string;
}

export interface ProdutoNoId {
  name: string;
  price: number;
  image: string;
}

const api = axios.create({
  baseURL: "http://localhost:5000",
});

export async function getProducts(): Promise<Produto[]> {
  const response = await api.get<Produto[]>("/products");
  return response.data;
}

export async function createProduct(data: ProdutoNoId): Promise<Produto> {
  const response = await api.post<Produto>("/products", data);
  return response.data;
}
