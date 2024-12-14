import React, { useState } from 'react'
import Ratting from '../components/Ratting';
const reviwtitle = "Add a Review";

let ReviewList = [ 
{ imgUrl: "/src/assets/images/instructor/01.jpg", 
imgAlt: "Client thumb",
name: "Ganelon Boileau", 
date: "Posted on Jun 10, 2022 at 6:57 am", 
desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.", }, 
{ imgUrl: "/src/assets/images/instructor/02.jpg",      imgAlt: "Client thumb", 
  name: "Morgana Cailot", 
  date: "Posted on Jun 10, 2022 at 6:57 am", 
  desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.", }, 
  { imgUrl: "/src/assets/images/instructor/03.jpg", imgAlt: "Client thumb",
    name: "Telford Bois", 
    date: "Posted on Jun 10, 2022 at 6:57 am", 
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.", },
      { imgUrl: "/src/assets/images/instructor/04.jpg", imgAlt: "Client thumb", 
        name: "Cher Daviau", 
        date: "Posted on Jun 10, 2022 at 6:57 am", 
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.", }, ];

const Review = () => {
  const [reviewShow, setReviewShow] = useState(true)
  return (
    <>
    <ul className={`review-nav lab-ul ${reviewShow ? "RevActive" : "DescActive"}`}>
      <li className='desc' onClick={() => setReviewShow(!reviewShow)}>Description</li>
      <li className='rev' onClick={() => setReviewShow(!reviewShow)}>Reviews 4</li>
    </ul>

    {/* desc & review content */}
    <div className={`review-content ${reviewShow ? "review-content-show" : "description-show"}`}>
      <div className='review-showing'>
        <ul className='content lab-ul'>
          {
            ReviewList.map((review, i) =>(
              <li key={i}>
                <div className='post-thumb'>
                  <img src={review.imgUrl} alt="" />
                </div>
                <div className='post-content'>
                  <div className='entry-meta'>
                    <div className='posted-on'>
                      <a href="#">{review.name}</a>
                      <p>{review.date}</p>

                    </div>
                  </div>
                  <div className='entry-content'>
                    <p>{review.desc}</p>
                  </div>
                </div>


              </li>
            ))
          }

        </ul>
          {/* add review field */}
          <div className='client-review'>
            <div className='review-form'>
              <div className='review-title'>
                <h5>{reviwtitle}</h5>
              </div>
              <form action='action' className='row'>
                <div className='col-md-4 col-12'>
                  <input type="text" name='name' id='name' placeholder='Full Name *' />
                </div>

                <div className='col-md-4 col-12'>
                  <input type="text" name='email' id='name' placeholder='Your Email *' />
                </div>

                <div className='col-md-4 col-12'>
                  <div className='rating'>
                    <span className='me-2'>Your Rating</span>
                    <Ratting/>

                  </div>
                </div>
                <div className='col-md-12 col-12'>
                 <textarea name="message" id="message"  rows="8" placeholder='Type Here Message'></textarea>
                </div>
                <div className='col-12'>
                  <button type='submit' className='default-button'>
                    <span>Submit Review</span>
                  </button>

                </div>

              </form>
            </div>
          </div>
      </div>

        {/* description */}
        <div className='description'>
          <p>An e-commerce platform is a digital marketplace where businesses and customers connect to buy and sell goods or services online. It serves as a virtual storefront, offering users the convenience of shopping from anywhere, anytime, with just a few clicks. E-commerce platforms often include features like secure payment gateways, detailed product descriptions, and customer reviews, enabling buyers to make informed decisions. These platforms cater to a wide range of industries, including fashion, electronics, home goods, and more, making them a versatile solution for businesses of all sizes.</p>

          <div className='post-item'>
            <div className='post-thumb'>
              <img src="/src/assets/images/shop/01.jpg" alt="" />
            </div>
            <div className='post-content'>
              <ul className='lab-ul'>
                <li>Using Lorem ipsum to focus attention on graphic elements in a webpage design proposal</li>
                <li>Using Lorem ipsum to focus attention on graphic elements in a webpage design proposal</li>
                <li>Using Lorem ipsum to focus attention on graphic elements in a webpage design proposal</li>
                <li>Using Lorem ipsum to focus attention on graphic elements in a webpage design proposal</li>
                <li>Using Lorem ipsum to focus attention on graphic elements in a webpage design proposal</li>
                <li>Using Lorem ipsum to focus attention on graphic elements in a webpage design proposal</li>
                <li>Using Lorem ipsum to focus attention on graphic elements in a webpage design proposal</li>
              </ul>
            </div>
          </div>
          <p>An e-commerce platform is a digital marketplace where businesses and customers connect to buy and sell goods or services online. It serves as a virtual storefront, offering users the convenience of shopping from anywhere, anytime, with just a few clicks. E-commerce platforms often include features like secure payment gateways, detailed product descriptions, and customer reviews, enabling buyers to make informed decisions. These platforms cater to a wide range of industries, including fashion, electronics, home goods, and more, making them a versatile solution for businesses of all sizes.</p>
        </div>


    </div>
    </>
  )
}

export default Review