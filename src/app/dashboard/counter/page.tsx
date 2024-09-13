import { Counter } from '../../../shoping-cart/components/Counter';


export const metadata = {
 title: 'Counter',
 description: 'un simple contador',
};

export default function CounterPage() {



  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <span>Productos en el carrito de compras </span>

      <Counter value = {20} />
     
    </div>
  );
}