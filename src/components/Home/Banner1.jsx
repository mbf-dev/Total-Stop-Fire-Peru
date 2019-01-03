import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import BannerAnim, { Element } from 'rc-banner-anim';
import ScrollElement from 'rc-scroll-anim/lib/ScrollElement';
//import Texty from 'rc-texty';
import ScrollAnim from 'rc-scroll-anim';



import 'rc-banner-anim/assets/index.css';

 
const { BgElement } = Element;

  

class Banner extends React.PureComponent {

 
BannerAnim= {
    children: [
      {
        name: 'elem0',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner1-text-wrapper' },
        bg: { className: 'bg bg0' },
        title: {
          className: 'banner1-title',
          children:'fsdfdsfdsfds',
        },
        content: {
          className: 'banner1-content',
          children: '一个高效的页面动画解决方案',
        },
        button: { className: 'banner1-button', children: 'Learn More' },
      },
      {
        name: 'elem1',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner1-text-wrapper' },
        bg: { className: 'bg bg1' },
        title: {
          className: 'banner1-title',
          children:
            'dffffffffffffffffffffffffffff',
        },
        content: {
          className: 'banner1-content',
          children: '一个高效的页面动画解决方案',
        },
        button: { className: 'banner1-button', children: 'Learn More' },
      },
    ],
  }

  render() {
    const { ...props } = this.props;
   
 
    delete props.isMobile;
    const childrenToRender = this.BannerAnim.children.map((item, i) => {
      const elem = item.BannerElement;
      const elemClassName = elem.className;
      delete elem.className;
      const { bg, textWrapper, title, content, button } = item;
      return (
        <Element  key={i.toString()} {...elem} prefixCls={elemClassName}>
          <BgElement key="bg" {...bg} />
          <QueueAnim
            type={['bottom', 'top']}
            delay={200}
            key="text"
            {...textWrapper}
          >
            <div key="logo" {...title}>
              {typeof title.children === 'string' &&
              title.children.match(
                /\.(svg|gif|jpg|jpeg|png|JPG|PNG|GIF|JPEG)$/
              ) ? (
                <img src={title.children} width="100%" alt="img" />
              ) : (
                title.children
              )}
            </div>
            <div key="content" {...content}>
              {content.children}
            </div>
            <Button ghost key="button" {...button}>
              {button.children}
            </Button>
          </QueueAnim>
        </Element>
      );
    });
    return (
      <div className= 'banner1'>
 
        <TweenOneGroup
          key="bannerGroup"
          enter={{ opacity: 0, type: 'from' }}
          leave={{ opacity: 0 }}
          component=""
        >
   
     
          <div className="banner1-wrapper" key="wrapper">
            <BannerAnim key="BannerAnim" 



            >
               {childrenToRender}
            </BannerAnim>
          </div>
          
        </TweenOneGroup>
        <TweenOne
          animation={{
            y: '-=20',
            yoyo: true,
            repeat: -1,
            duration: 1000,
          }}
          className="banner1-icon"
          style={{ bottom: 40 }}
          key="icon"
        >
          <Icon type="down" />
        </TweenOne>
       
      </div>
       
    );
  }
}

Banner.propTypes = {
  onEnterChange: PropTypes.func,
};

export default Banner;