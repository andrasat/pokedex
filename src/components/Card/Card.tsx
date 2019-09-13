import React from 'react';
import Card from 'react-bootstrap/Card';

import {
  CardWrapper,
  CardHeader,
  CardFooter,
  CardImgWrapper,
  CardImg
} from './Card.module.scss';

export interface IProps {
  imageSrc?: string;
  titleText?: string;
  footer?: React.ReactNode;
  cardOnClickHandler?: () => void;
}

class CustomCard extends React.PureComponent<IProps> {
  render() {
    const {
      imageSrc,
      titleText,
      children,
      cardOnClickHandler,
      footer
    } = this.props;

    return (
      <Card
        style={{ width: 300, minHeight: 360 }}
        onClick={cardOnClickHandler}
        className={CardWrapper}
      >
        <Card.Header className={`${CardHeader} game-font`}>
          {titleText || 'None'}
        </Card.Header>
        <div className={CardImgWrapper}>
          <Card.Img
            variant="top"
            className={CardImg}
            src={imageSrc || 'https://via.placeholder.com/360'}
          />
        </div>
        {children && <Card.Body>{children}</Card.Body>}
        {footer && <Card.Footer className={CardFooter}>{footer}</Card.Footer>}
      </Card>
    );
  }
}

export default CustomCard;
