import { createContext, useContext, useState } from "react";

interface ProductType {
  id: number;
  name: string;
  explanation: string;
  price: number;
}

type ProductContextType = [
  ProductType[],
  React.Dispatch<React.SetStateAction<ProductType[]>>
];

const ProductContext = createContext<ProductContextType | null>(null);

const initialValue: ProductType[] = [
  {
    id: 0,
    name: "Iphone 13 Max",
    explanation: '디스플레이는 6.1인치 19.5:9 비율의 2532x1170 해상도를 지원하며',
    price: 1230000,
  },
];

export function ProductProvider({ children }: { children: React.ReactNode }) {
  const productState = useState<ProductType[]>(initialValue);

  return (
    <ProductContext.Provider value={productState}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProductContext() {
  return useContext(ProductContext) as ProductContextType;
}