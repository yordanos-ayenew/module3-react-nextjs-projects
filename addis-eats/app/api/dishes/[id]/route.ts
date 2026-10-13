import { NextResponse } from "next/server";
import { dishes } from "@/lib/dishes";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function GET(request: Request, {params}: RouteContext){
  const {id} = await params;
  const dishId = Number(id);
  if (!Number.isInteger(dishId)) {
    return NextResponse.json(
      {error: "Invalid dish ID"},
      {status: 400}
    );
  }
  const dish = dishes.find((item) => item.id === dishId);
  if (!dish) {
    return NextResponse.json(
      {error: "Dish not found"},
      {status: 404}
    );
  }
  return NextResponse.json(dish);
}