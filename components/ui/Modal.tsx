'use client';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

export default function Modal({ 
  children, 
  isOpen, 
  onClose, 
  title 
}: { 
  children: React.ReactNode, 
  isOpen: boolean, 
  onClose: () => void,
  title: string
}) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100] transition-opacity" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-black border border-white/10 p-10 z-[101] outline-none">
          <div className="flex justify-between items-center mb-8">
            <Dialog.Title className="text-2xl font-black uppercase">{title}</Dialog.Title>
            <Dialog.Close asChild>
              <button className="text-white hover:text-primary transition-colors">
                <X size={24} />
              </button>
            </Dialog.Close>
          </div>
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}