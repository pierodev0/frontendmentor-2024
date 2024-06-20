import { IconX } from '@tabler/icons-react';
const Modal = ({ children }) => {
  return (
    <div className='fixed h-full inset-0  z-50 bg-black/40'>
      <div className='relative -right-1/2 top-1/2 w-fit bg-white -translate-x-1/2 -translate-y-1/2 p-10 rounded-lg shadow-lg flex flex-col gap-3'>
      {children}
        <IconX className='text-gray-400 hover:text-gray-600 hover:cursor-pointer absolute top-8 right-4'/>
      </div>
    </div>
  );
};

export default Modal;
