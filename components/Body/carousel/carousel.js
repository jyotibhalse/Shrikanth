import Carousel from 'react-bootstrap/Carousel';
import './carousel.css';

function IndividualIntervalsExample() {
  return (
    <Carousel variant='light' className='main_carousel '>
      <Carousel.Item interval={500}>
        <img
          className='caroimg'
          src='https://www.biotichealthcare.com/storage/Blogs/ihyho9SOmLTQfFOzTWOT1N3DudTZd4CmEhg741mV.jpg'
          alt='First slide'
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className='caroimg'
          src='https://okcredit-blog-images-prod.storage.googleapis.com/2020/12/pharmacy4.jpg'
          alt='Second slide'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='caroimg'
          src='https://bestclinicinmohali.com/wp-content/uploads/2023/01/pharmacy-store.png'
          alt='Third slide'
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;
