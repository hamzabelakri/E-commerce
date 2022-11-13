import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {getOneProduct} from '../../Redux/Actions/productAction';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function ProductCard({elt}) {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (event) => {
    dispatch(getOneProduct(elt._id, navigate));
  };
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={elt.imageUrl} />
      <Card.Body>
        <Card.Title>{elt.name}</Card.Title>
        <Card.Text>
          {elt.countInStock}
        </Card.Text>
        <Button variant="primary" onClick={handleClick}>View details</Button>
      </Card.Body>
    </Card>
  )
}

export default ProductCard