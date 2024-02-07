import React from 'react';

export interface ModalViewProps {
  children: React.ReactNode[] | React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/ban-types
  showModal: boolean;
  onClose : () => void
}

export function ModalView(props: ModalViewProps) {
  const { onClose, showModal, children } = props;
  const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  return (
    <>
    { showModal && (
      <div onClick={onClose} className='fixed inset-0 bg-gray-700 bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-10'>
        <div onClick={stopPropagation}  className='relative p-4 w-full md:w-1/2  max-h-full overflow-y-auto'>
            <div className="relative bg-white rounded-lg shadow p-6 ">
                {children}
            </div>
        </div>
      </div>
    )}
    </>
  );
}

export default ModalView;