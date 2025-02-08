import { NextResponse } from "next/server";

type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  isNew: boolean;
  salePrice?: number;
  label?: string;
  labelColor?: string;
  category: string; // Add category field here
};

const products: Product[] = [
  {
    id: 1,
    name: "Neon White Sneakers",
    price: 2000,
    imageUrl: "/shoes 1.PNG",
    isNew: true,
    category: "Casual Sneakers", // Add category
  },
  {
    id: 2,
    name: "Classic White Sneakers",
    price: 2000,
    imageUrl: "/shoes 2.PNG",
    isNew: false,
    salePrice: 30,
    category: "Casual Shoes", // Add category
  },
  {
    id: 3,
    name: "Black Sports Sneakers",
    price: 2000,
    imageUrl: "/shoes 3.PNG",
    isNew: false,
    category: "Running Shoes", // Add category
  },
  {
    id: 4,
    name: "Stylish Blue Trainers",
    price: 2000,
    imageUrl: "/shoes 4.PNG",
    isNew: false,
    category: "Training Shoes", // Add category
  },
  {
    id: 5,
    imageUrl: "/shoes 5.PNG",
    label: "Sales",
    labelColor: "bg-orange-500",
    name: "Romantic White Sneakers",
    price: 2000,
    isNew: false,
    category: "Lifestyle Shoes", // Add category
  },
  {
    id: 6,
    imageUrl: "/shoes 6.PNG",
    label: "New",
    labelColor: "bg-green-500",
    name: "Grey Canvas Shoes",
    price: 2000,
    isNew: false,
    category: "Casual Shoes", // Add category
  },
  {
    id: 7,
    imageUrl: "/shoes 7.PNG",
    label: "Sale",
    labelColor: "bg-red-500",
    name: "Red High Top Sneakers",
    price: 2000,
    isNew: false,
    category: "Fashion Sneakers", // Add category
  },
  {
    id: 8,
    imageUrl: "/shoes 8.PNG",
    label: "Best Seller",
    labelColor: "bg-blue-500",
    name: "Red Loafers",
    price: 2000,
    isNew: false,
    category: "Casual Loafers", // Add category
  },
  {
    id: 9,
    imageUrl: "/shoes 9.PNG",
    label: "Sale",
    labelColor: "bg-red-500",
    name: "Blue Running Shoes",
    price: 2000,
    isNew: false,
    category: "Sports Shoes", // Add category
  },
  {
    id: 10,
    imageUrl: "/shoes 10.PNG",
    label: "New",
    labelColor: "bg-green-500",
    name: "Black Athletic Sneakers",
    price: 2000,
    isNew: false,
    category: "Training Shoes", // Add category
  },
  {
    id: 11,
    imageUrl: "/shoes 11.PNG",
    label: "Sales",
    labelColor: "bg-orange-500",
    name: "Black Classic Runner",
    price: 2000,
    isNew: false,
    category: "Running Shoes", // Add category
  },
  {
    id: 12,
    imageUrl: "/shoes 12.PNG",
    label: "Best Seller",
    labelColor: "bg-blue-500",
    name: "All_Black Sneakers",
    price: 2000,
    isNew: false,
    category: "Lifestyle Shoes", // Add category
  },
];

export const GET = async (req: Request) => {
  const url = new URL(req.url);
  const query = url.searchParams.get("q")?.toLowerCase() || "";

  // Filter products based on the query
  const filteredProducts = query
    ? products.filter((product) =>
        product.name.toLowerCase().includes(query)
      )
    : products;

  return NextResponse.json(filteredProducts);
};
