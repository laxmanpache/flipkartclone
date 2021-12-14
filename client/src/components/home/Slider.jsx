import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import Carousel from "react-multi-carousel";
import Countdown from 'react-countdown';
import "react-multi-carousel/lib/styles.css";
import { products } from '../../consence/data';
import { Button } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';

const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

const responsive = {

  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


const useStyle = makeStyles(theme=>({
  image: {
    height: 150,
  },
  component: {
    marginTop: '20px',
    background:"#f2f2f2",
    marginBottom:'10px',
    margin:10
  },
  deals: {
    padding: '10px 20px',
    display: 'flex',

  },
  dealtext: {
    fontSize: 22,
    fontWeight: 600,
    lineHeight: '32px',
    marginRight: 10
  },
  timer: {
    color: "#7f7f7f",
    marginLeft: 10,
    display: 'flex',
    alignItems: "center",

  },
  buton: {
    marginLeft: 'auto',
    background: "#2874f0",
    borderRadius: 2,
    fontSize: 13
  },
  text: {
    fontSize: 13,
    marginTop: 5
  },
  wraper: {
    padding: "20px 15px"
  },
  timer:{
    [theme.breakpoints.down('sm')]:{
      display:'none'
    }
  }
}))

const Slider = ({ timer , title ,products}) => {

  const classes = useStyle();
  const renderer = ({ hours, minutes, seconds }) => {

    // Render a countdown
    return <span className={classes.timer}>{hours}:{minutes}:{seconds} left</span>;

  };
  return (
    <div>
      <Box className={classes.component}>
        <Box className={classes.deals}>
          <Typography className={classes.dealtext} >{title}</Typography>
          {
            timer && <>
             <Box className={classes.timer}>
              <img src={timerURL} alt="timer" style={{ width: 24 }}></img>
              <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
             </Box>
              <Button variant="contained" className={classes.buton}>View all</Button>
            </>

          }
        </Box>
        <Divider />
        <Carousel
          responsive={responsive}
          infinite={true}
          swipeable={false}
          draggable={false}
          centerMode={true}
          autoPlay={true}
          autoPlaySpeed={10000}
          showDots={false}
          // removeArrowOnDeviceType={['tablet', 'mobile']}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          containerClass="carousel-container"
        >

          {
            
            products.map((curele,key) => (
              <Link to={`product/${curele.id}`}>
              <Box textAlign="center" key={key} className={classes.wraper}>
                <img src={curele.url} className={classes.image} />
                <Typography className={classes.text} style={{ fontWeight: 600, color: "#212121" }}>{curele.title.shortTitle}</Typography>
                <Typography className={classes.text} style={{ color: "green" }}>{curele.discount}</Typography>
                <Typography className={classes.text} style={{ color: "#212121", opacity: "0.6" }}>{curele.tagline}</Typography>
              </Box>
              </Link>

            ))
          }

        </Carousel>
      </Box>
    </div>
  )
}

export default Slider
