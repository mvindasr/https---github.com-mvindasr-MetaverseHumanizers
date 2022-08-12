import React from 'react';
import cx from 'classnames';

import Card from '../Card';
import ProductCardDescription, { ProductCardDescriptionProps } from './ProductCardDescription';
import ProductCardGallery, { ProductCardGalleryProps } from './ProductCardGallery';

import styles from './styles.module.scss';

export type ProductCardProps = {
  className?: string;
  photos: ProductCardGalleryProps['photos'];
  productName: ProductCardDescriptionProps['productName'];
  description: ProductCardDescriptionProps['description'];
  buttonText?: ProductCardDescriptionProps['buttonText'];
  url: ProductCardDescriptionProps['url']; 
  activated: ProductCardDescriptionProps['activated'];
  onClick?: ProductCardDescriptionProps['onClick'];
}

const ProductCard: React.FC<ProductCardProps> = ({
  className,
  photos,
  productName,
  description,
  buttonText,
  url,
  activated,
  onClick,
  ...rest
}) => (
  <Card
    className={cx(
      styles['product-card'],
      className
    )}
    {...rest}
  >
    <ProductCardGallery photos={photos} />
    <ProductCardDescription
      productName={productName}
      description={description}
      buttonText={buttonText}
      url={url}
      activated={activated}
      onClick={onClick} />
      
  </Card>
);

export default ProductCard;
