export const store = { name: 'Brasa Burger', phone: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, '') || '', demo: true };
export const categories = ['Todos', 'Burgers', 'Acompanhamentos', 'Bebidas'] as const;
export type Category = typeof categories[number];
export type Product = { id: string; name: string; category: Category; description: string; price: number; image: string; label?: string; allergens: string; extras: boolean };
export const products: Product[] = [
 {id:'classico',name:'Brasa Clássico',category:'Burgers',description:'Pão brioche, smash de 100 g, cheddar, alface, picles e maionese da casa.',price:2690,image:'/images/burger.webp',label:'Da casa',allergens:'Contém glúten, leite e ovos.',extras:true},
 {id:'duplo',name:'Duplo de respeito',category:'Burgers',description:'Dois smash de 100 g, cheddar em dobro, cebola caramelizada e molho da casa.',price:3490,image:'/images/burger.webp',label:'Para muita fome',allergens:'Contém glúten, leite e ovos.',extras:true},
 {id:'cheddar',name:'Cheddar & cebola',category:'Burgers',description:'Smash de 100 g, cheddar cremoso, cebola caramelizada e pão brioche.',price:2990,image:'/images/burger.webp',allergens:'Contém glúten, leite e ovos.',extras:true},
 {id:'fritas',name:'Fritas da casa',category:'Acompanhamentos',description:'Batatas crocantes, sal e um potinho de molho da casa. Porção de 200 g.',price:1590,image:'/images/fries.webp',label:'Vai bem junto',allergens:'Molho contém leite e ovos. Pode haver contato com glúten.',extras:false},
 {id:'fritas-grandes',name:'Fritas para dividir',category:'Acompanhamentos',description:'A mesma crocância, em uma porção de 400 g. Acompanha dois molhos.',price:2490,image:'/images/fries.webp',allergens:'Molho contém leite e ovos. Pode haver contato com glúten.',extras:false},
 {id:'limonada',name:'Limonada da casa',category:'Bebidas',description:'Limão, gelo e hortelã. Refrescante do primeiro ao último gole. Copo de 400 ml.',price:990,image:'/images/drink.webp',label:'Bem geladinha',allergens:'Consulte os ingredientes antes de pedir se tiver restrições.',extras:false},
];
export const extras = [{id:'cheddar',name:'Cheddar extra',price:300},{id:'bacon',name:'Bacon crocante',price:500},{id:'smash',name:'Mais um smash · 100 g',price:800}] as const;
export type CartLine = { key: string; productId: string; extraIds: string[]; note: string; quantity: number };
export const money = (cents: number) => new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(cents/100);
export function unitPrice(line: CartLine) { const product=products.find(p=>p.id===line.productId);return product ? product.price + extras.filter(e=>line.extraIds.includes(e.id)).reduce((sum,e)=>sum+e.price,0) : 0; }
export function sanitizeCart(value: unknown): CartLine[] {
 if(!Array.isArray(value)) return [];
 return value.slice(0,50).flatMap((item: unknown)=>{
   if(!item || typeof item!=='object')return [];const line=item as Record<string,unknown>;const product=products.find(p=>p.id===line.productId);
   if(!product || typeof line.quantity!=='number' || !Number.isInteger(line.quantity) || line.quantity<1 || line.quantity>20)return [];
   const rawExtras=line.extraIds; const extraIds=product.extras && Array.isArray(rawExtras)?extras.filter(e=>rawExtras.includes(e.id)).map(e=>e.id):[];
   const note=typeof line.note==='string'?line.note.slice(0,140):'';
   return [{key:JSON.stringify([product.id,extraIds,note]),productId:product.id,extraIds,note,quantity:line.quantity}];
 });
}


