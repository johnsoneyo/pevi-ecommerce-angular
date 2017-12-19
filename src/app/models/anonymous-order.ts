import { Item } from "./item";

export class AnonymousOrder {
    id: number;
    invId: number;
    quantity: number;
    timeCreated : Date;
    productId  : Item;
    fname:string;
}