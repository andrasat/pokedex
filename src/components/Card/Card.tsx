import React from 'react';
import classNames from 'classnames';
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
  style?: React.CSSProperties;
  footer?: React.ReactNode;
  cardOnClickHandler?: () => void;
}

class CustomCard extends React.PureComponent<IProps> {
  render() {
    const {
      imageSrc,
      titleText,
      style,
      footer,
      cardOnClickHandler,
      children
    } = this.props;

    return (
      <Card
        style={style}
        onClick={cardOnClickHandler}
        className={classNames(CardWrapper, { clickable: cardOnClickHandler!! })}
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
        {children && (
          <Card.Body style={{ width: '100%' }}>{children}</Card.Body>
        )}
        {footer && <Card.Footer className={CardFooter}>{footer}</Card.Footer>}
      </Card>
    );
  }
}

export default CustomCard;
