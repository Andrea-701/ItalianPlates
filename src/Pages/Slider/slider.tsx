import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const fadeImages = [
  {
    url: 'https://thumbs.dreamstime.com/b/pizza-rustic-italian-mozzarella-cheese-basil-leaves-35669930.jpg',
    caption: 'Classic Pizza'
  },
  {
    url: 'https://media.istockphoto.com/id/175205178/photo/focaccia.jpg?s=612x612&w=0&k=20&c=2ZNwfPvzPhbEzg3GYed5VTEkV0gAeDYjNODFea_pWRw=',
    caption: 'Focaccia Bread'
  },
  {
    url: 'https://blog.giallozafferano.it/lebistro/wp-content/uploads/2018/12/tiramisu%CC%80.jpg',
    caption: 'Tiramisù cake'
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <img 
            style={{ width: '50%', 
            margin: '3em 0em' }} src={fadeImage.url} />
            <h2 style={{color: 'green'}}>{fadeImage.caption}</h2>
          </div>
        ))}
      </Fade>
    </div>
  )
}

export default Slideshow