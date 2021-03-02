import React from 'react';
import PropTypes from 'prop-types';

function Food({ name, picture, rating }) {
  return (
    <div>
        <h2>I like { name }</h2>
        <h4>{rating}/5.0</h4>
        <img src={picture} alt={name} />
    </div>
  );
}

const foodILike =  [
  {
    id: 1,
    name: 'Kimchi',
    image: 'http://cdn.011st.com/11dims/resize/600x600/quality/75/11src/pd/18/8/7/7/7/8/2/yLEGw/1245877782_B.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image: 'https://t1.daumcdn.net/cfile/tistory/9942B3395A3501C304',
    rating: 4.9,
  },
  {

    id: 3,
    name: 'Bibimbap',
    image: 'https://mblogthumb-phinf.pstatic.net/MjAxNzA0MjRfMjI3/MDAxNDkzMDIzMjc4MjU2.L-3Vv9r0XjeRGGncaB0p0II6mw9-NoBfu2k4PMCrTdgg.jP8wA64wrWrXrH3ZTP4UBCPR6ZWppqqnhXkS8FPpYMQg.JPEG.estelle926/151435979-56a57a083df78cf772888a61.jpg?type=w800',
    rating: 3.9,
  },
  {

    id: 4,
    name: 'Doncasu',
    image: 'https://cdn.crowdpic.net/detail-thumb/thumb_d_6DB4C5CCE0F94E287FF78A6377CCD4BB.jpg',
    rating: 4.8,
  },
  {
    id: 5,
    name: 'Kimbap',
    image: 'https://static.wtable.co.kr/image/production/service/recipe/689/edd1e01f-4502-453b-8b61-688941aefb76.jpg?size=1024x',
    rating: 4.5,
  },
];

function App() {
  return (
    <div>
      { foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      )) }
    </div>
  );
}

Food.propTypes = { /* Typo in static class property declaration  react/no-typos ==> propTypes 대문자로 작성하지 않도록 주의 */
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};

export default App;
