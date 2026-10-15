import test from 'node:test';
import assert from 'node:assert/strict';
import { subtotal, mergeQuantity, whatsappUrl } from '../lib/order.ts';
test('subtotal preserves cents across quantities and extras',()=>{assert.equal(subtotal([{quantity:2,unitPrice:2990},{quantity:1,unitPrice:990}]),6970);assert.equal(subtotal([]),0);});
test('quantity stays between one and twenty',()=>{assert.equal(mergeQuantity(19,3),20);assert.equal(mergeQuantity(1,-2),1);});
test('WhatsApp requires a usable number and escapes order text',()=>{assert.equal(whatsappUrl('', 'Pedido'),null);assert.equal(whatsappUrl('abc','Pedido'),null);assert.equal(whatsappUrl('5511999999999','Brasa & pão\nR$ 26,90'),'https://wa.me/5511999999999?text=Brasa%20%26%20p%C3%A3o%0AR%24%2026%2C90');});
import { sanitizeCart, unitPrice } from '../lib/catalog.ts';
test('saved bag rejects invalid products, prices and quantities',()=>{assert.deepEqual(sanitizeCart([{productId:'unknown',quantity:2}]),[]);assert.deepEqual(sanitizeCart([{productId:'classico',quantity:-1}]),[]);const [line]=sanitizeCart([{productId:'classico',quantity:2,extraIds:['bacon','bacon','free'],price:1,note:'Sem cebola'}]);assert.deepEqual(line.extraIds,['bacon']);assert.equal(unitPrice(line),3190);});
