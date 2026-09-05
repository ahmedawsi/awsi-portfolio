import React from 'react';
import Image from 'next/image';
import { IconBrandFigma } from '@tabler/icons-react';

const DesignCard = ({
  image,
  title,
  url = null,
  loading = 'eager',
  className = ''
}) => {
  const content = (
    <>
      <div className="w-full aspect-4/5 overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={640}
          height={800}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading={loading}
          draggable="false"
        />
      </div>
      <div className="p-4 text-white flex flex-row items-center justify-between gap-1">
        <h3 className="text-lg font-semibold">{title}</h3>
        {url && (
          <div className="flex flex-row opacity-60 items-center justify-center bg-white/15 px-2 py-1 gap-1 rounded-full">
            <IconBrandFigma size={15} />
            <span className="text-xs">Prototype</span>
          </div>
        )}
      </div>
    </>
  );

  const cardClasses = `group relative block w-full overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-lg transition hover:scale-102 hover:border-white/25 focus:outline-none focus:ring-2 focus:ring-white/40 ${className}`;

  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${title} Figma Prototype`}
        className={cardClasses}
      >
        <article>{content}</article>
      </a>
    );
  }

  return (
    <article className={cardClasses}>
      {content}
    </article>
  );
};

export default DesignCard;
