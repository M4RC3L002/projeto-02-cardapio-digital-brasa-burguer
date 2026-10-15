'use client';
import {useEffect,useRef} from 'react';
import {X} from 'lucide-react';
export default function Sheet({open,onClose,title,children,className=''}:{open:boolean;onClose:()=>void;title:string;children:React.ReactNode;className?:string}){
 const ref=useRef<HTMLDialogElement>(null);
 useEffect(()=>{const dialog=ref.current;if(!dialog)return;if(open&&!dialog.open)dialog.showModal();else if(!open&&dialog.open)dialog.close();if(!open)return;const old=document.body.style.overflow;document.body.style.overflow='hidden';return()=>{document.body.style.overflow=old;};},[open]);
 return <dialog ref={ref} className={`sheet ${className}`} aria-label={title} onCancel={event=>{event.preventDefault();onClose();}} onClick={event=>{if(event.target===event.currentTarget){const r=event.currentTarget.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)onClose();}}}>
  <div className="sheet-heading"><h2>{title}</h2><button type="button" className="icon-button" onClick={onClose} aria-label={`Fechar ${title.toLowerCase()}`}><X size={21}/></button></div>{children}
 </dialog>;
}
