import Image from 'next/image';

interface PlaceholderImageProps {
  width: number;
  height: number;
  text?: string;
  className?: string;
  bgClassName?: string;
}

export default function PlaceholderImage({ 
  width, 
  height, 
  text, 
  className = '',
  bgClassName
}: PlaceholderImageProps) {
  // Calculate dimensions and font size
  const aspectRatio = height / width;
  const viewBoxWidth = 400;
  const viewBoxHeight = viewBoxWidth * aspectRatio;
  const fontSize = Math.min(viewBoxWidth / 20, viewBoxHeight / 20);

  return (
    <div className={`relative ${className}`} style={{ aspectRatio: `${width}/${height}` }}>
      <div className={`absolute inset-0 ${bgClassName || 'bg-gradient-to-br from-blue-500 to-cyan-600'}`} />
      <div className="absolute inset-0 flex items-center justify-center text-white font-semibold text-lg">
        {text || 'Placeholder Image'}
      </div>
    </div>
  );
}
