import React from 'react';

import styles from './styles.module.scss';

export type ProductCardDescriptionProps = {
  productName: string;
  description: string;
  buttonText?: string;
  url: string;
  activated: boolean;
  onClick?: any;
};

const ProductCardDescription: React.FC<ProductCardDescriptionProps> = ({
  productName,
  description,
  activated,
  onClick
}) => (
  <div className={styles['product-card-description-box']}>
    <div className={styles['product-card-name']}>{productName}</div>
    <p className={styles['product-card-description']}>{description}</p>
    <div className={styles['text center']}>
    <img 
        src={activated
        ? 'https://i.ibb.co/vcG3b7s/switchon.png'
        : 'https://i.ibb.co/nbzg7T7/switchoff.png'
    }
        className={styles['Switch-logo']}
        onClick={onClick}
        alt=""
      />
    </div>
  </div>
);

export default ProductCardDescription;
