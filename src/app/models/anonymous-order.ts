import { Item } from "./item";

export class AnonymousOrder {
    id: number;
    paid : boolean;
    quantity: number;
    timeCreated : Date;
    productId  : Item;
    fname:string;
}