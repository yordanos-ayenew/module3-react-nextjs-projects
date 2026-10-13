import { NextResponse } from "next/server";
import { dishes } from "@/lib/dishes";

export async function POST(request: Request) {
    const body = await request.json();
    if (!body.items || body.items.length === 0) {
        return NextResponse.json(
        { error: "Order must contain at least one item." },
        { status: 400 }
        );
    }
    const orderItems = [];
    for (const item of body.items) {
        const dish = dishes.find((dish) => dish.id === item.dishId);
        if (!dish || !Number.isInteger(item.quantity) || item.quantity <= 0) {
            return NextResponse.json(
                { error: "Invalid dish or quantity." },
                { status: 400 }
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
            message: "Order processed successfully.",
            items: orderItems,
            total
        },
        { status: 201 }
    );
}
