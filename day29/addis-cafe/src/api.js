export async function loadDishes(category, signal){
    const res = await fetch("/dishes.json", {signal})
    if (!res.ok){
        throw new Error("Could not load the menu");
    }
    return await res.json();
}