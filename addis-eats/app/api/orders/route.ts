import { NextResponse } from "next/server";
import { dishes } from "@/lib/dishes";
import { orderSchema } from "@/lib/schema";

export async function POST(request: Request) {
    try{
        const body = await request.json();
        const validation = orderSchema.safeParse(body);
        if (!validation.success) {
            return NextResponse.json(
                {
                    message: "Validation failed",
                    fieldErrors: validation.error.flatten().fieldErrors,
                },
                { status: 422 }
            );
        }
        if (!Array.isArray(body.items) || body.items.length === 0) {
            return NextResponse.json(
            { error: "Order must contain at least one item." },
            { status: 422 }
            );
        }
        const orderItems = [];
        for (const item of body.items) {
            const dish = dishes.find((dish) => dish.id === item.dishId);
            if (!dish || !Number.isInteger(item.quantity) || item.quantity <= 0) {
                return NextResponse.json(
                    { error: "Invalid dish or quantity." },
                    { status: 422 }
                );
            }
            orderItems.push({
                dishId: dish.id,
                name: dish.name,
                price: dish.price,
                quantity: item.quantity,
                subtotal: dish.price * item.quantity
            });
        }
        const total = orderItems.reduce(
            (sum, item) => sum + item.subtotal, 0);
            return NextResponse.json(
            {
                customer: validation.data,
                message: "Order processed successfully.",
                items: orderItems,
                total
            },
            { status: 201 }
        );
    } catch{
        return NextResponse.json(
        { message: "Invalid request body" },
        { status: 400 }
        );
    }
}