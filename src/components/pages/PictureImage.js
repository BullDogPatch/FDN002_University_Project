function PictureImage({ src, alt, width, height }) {
  return (
    <img src={src} alt={alt} width={width} height={height} className="image" />
  );
}

export default PictureImage;