'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
  name: z.string().min(2, { message: 'Введіть ім\'я' }),
  phone: z.string().min(10, { message: 'Введіть номер телефону' }),
  type: z.string()
});

export default function LeadForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Як вас звати?</label>
        <input 
          {...register('name')} 
          className="w-full bg-secondary border border-white/10 p-4 outline-none focus:border-primary transition-colors"
          placeholder="Олександр"
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message as string}</p>}
      </div>
      <div>
        <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Номер телефону</label>
        <input 
          {...register('phone')} 
          className="w-full bg-secondary border border-white/10 p-4 outline-none focus:border-primary transition-colors"
          placeholder="+380 00 000 00 00"
        />
        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message as string}</p>}
      </div>
      <div>
        <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Тип послуги</label>
        <select 
          {...register('type')} 
          className="w-full bg-secondary border border-white/10 p-4 outline-none focus:border-primary transition-colors appearance-none"
        >
          <option value="website">Створення сайту</option>
          <option value="seo">SEO Просування</option>
          <option value="audit">Безкоштовний Аудит</option>
        </select>
      </div>
      <button 
        type="submit" 
        className="w-full bg-primary text-secondary font-black py-5 uppercase tracking-tighter hover:bg-white transition-all"
      >
        Надіслати запит
      </button>
    </form>
  );
}