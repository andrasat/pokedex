import React from 'react';
import Card from 'react-bootstrap/Card';

import { CardWrapper } from './Card.module.scss';

export interface IProps {
  imageSrc?: string;
  cardTitleText?: string;
  children?: JSX.Element;
  cardOnClickHandler?: () => void;
}

class CustomCard extends React.PureComponent<IProps> {
  render() {
    const {
      imageSrc,
      cardTitleText,
      children,
      cardOnClickHandler
    } = this.props;

    return (
      <Card
        style={{ width: 360 }}
        onClick={cardOnClickHandler}
        className={CardWrapper}
      >
        <Card.Img
          variant="top"
          height={360}
          src={imageSrc || 'https://via.placeholder.com/360'}
        />
        <Card.Body>
          <Card.Title className="game-font">
            {cardTitleText || 'None'}
          </Card.Title>
          {children}
        </Card.Body>
      </Card>
    );
  }
}

export default CustomCard;
