import { IconArrowRight, IconBrandFigma, IconCaretRight } from '@tabler/icons-react';
import React from 'react';

const DesignCard = ({
  image,
  title,
  url = null,
  loading = 'lazy',
  fetchPriority = 'auto',
  className = ''
}) => {
  const handleClick = () => {
    if (url) window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <article
      onClick={handleClick}
      className={`relative w-full overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-lg transition hover:scale-102 hover:border-white/25 ${url ? 'cursor-pointer' : 'cursor-default'} ${className}`}>
      <div className="w-full aspect-4/5 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading={loading}
          fetchPriority={fetchPriority}
          draggable="false"
        />
      </div>
      <div className="p-4 text-white flex flex-row items-center justify-between gap-1">
        <h3 className="text-lg font-semibold">{title}</h3>
        {url &&
          <div className='flex flex-row opacity-60 items-center justify-center bg-white/15 px-2 py-1 gap-1 rounded-full'>
            <IconBrandFigma size={15} />
            <span className="text-xs">Prototype</span>
          </div>
        }
      </div>
    </article>
  );
};

export default DesignCard;
