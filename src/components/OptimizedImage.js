import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height, 
  placeholderSrc,
  effect = 'blur',
  threshold = 100,
  ...props 
}) => {
  // 生成WebP格式的图片URL（如果支持）
  const generateWebPSrc = (originalSrc) => {
    if (!originalSrc) return originalSrc;
    
    // 如果是外部图片，直接返回原URL
    if (originalSrc.startsWith('http')) {
      return originalSrc;
    }
    
    // 如果是本地图片，尝试添加WebP后缀
    const baseName = originalSrc.replace(/\.[^/.]+$/, '');
    return `${baseName}.webp`;
  };

  const webpSrc = generateWebPSrc(src);
  const fallbackSrc = src;

  return (
    <picture>
      {/* WebP格式（如果支持） */}
      <source 
        srcSet={webpSrc} 
        type="image/webp" 
      />
      
      {/* 原始格式作为后备 */}
      <LazyLoadImage
        src={fallbackSrc}
        alt={alt}
        className={className}
        width={width}
        height={height}
        effect={effect}
        placeholderSrc={placeholderSrc}
        threshold={threshold}
        style={{
          width: width ? `${width}px` : 'auto',
          height: height ? `${height}px` : 'auto',
          objectFit: 'cover',
          transition: 'opacity 0.3s ease-in-out'
        }}
        {...props}
      />
    </picture>
  );
};

export default OptimizedImage;
