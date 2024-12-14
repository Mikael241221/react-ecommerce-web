import React, { useState } from 'react'
import blogList  from "../utilis/blogdata"
import { useParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Tags from '../shop/Tags'
import PopularPost from '../shop/PopularPost'


const socialList = [ { 
  link: "#", 
  iconName: "icofont-facebook", 
  className: "facebook", 
}, 
{ link: "#", 
  iconName: "icofont-twitter", 
  className: "twitter",
 }, 
 { link: "#", 
  iconName: "icofont-linkedin", 
  className: "linkedin", 
}, 
{ link: "#", 
  iconName: "icofont-instagram", 
  className: "instagram", 
}, 
{ link: "#", 
  iconName: "icofont-pinterest", 
  className: "pinterest", }, ];

const SingleBlog = () => {
  const [blog, setBlog] = useState(blogList)
  const {id} = useParams()
  //console.log(id)
  const result = blogList.filter((b) => b.id===Number(id));
  console.log(result[0])

  return (
    <div>
      <PageHeader title={'Single Blog Page'} curPage={'Blog / Blog Details'}/>
      <div className="blog-section blog-single padding-tb section-bg">
       <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-12">
            <article>
              <div className="section-wrapper">
                <div className="row row-col-1 justify-content-center g-4">
                  <div className="col">
                    <div className="post-item style-2">
                      <div className="post-inner">
                        {
                         result.map((item) => (
                            <div key={item.id}>
                              <div className="post-thumb">
                                <img src={item.imgUrl} alt=""  className='w-100'/>
                              </div>
                              <div className="post-content">
                                <h3>{item.title}</h3>
                                <div className="meta-post">
                                <ul className="lab-ul">
                          {
                            item.metaList.map((val, i) => (
                              <li key={i}><i className={val.iconName}></i>{val.text}</li>
                            )
                            )
                          }
                        </ul>
                                </div>
                                <p>Following years of white-hot growth, luxury home prices in Sydney declined for the first time in years, slipping 1% between the second quarter and third quarter of 2018, according to the latest report from brokerage Knight Frank.The nearly 6,500-square-foot apartment has sweeping views</p>
                                <blockquote><p>I’m thinking I’m back you want a war or you want to just give me a gun everything’s got a price rusty, I guess. You stabbed price rusty, the Devil in the back how good to see you again.</p>
                                <cite>
                                  <a href="#">...Steve Jobs</a>
                                </cite>
                                </blockquote>
                                <p>Following years of white-hot growth, luxury home prices in Sydney declined for the first time in years, slipping 1% between the second quarter and third quarter of 2018, according to the latest report from brokerage Knight Frank.The nearly 6,500-square-foot apartment has sweeping views
                                </p>
                                <img src="/src/assets/images/blog/single/01.jpg" alt="" />
                                <p>Following years of white-hot growth, luxury home prices in Sydney declined for the first time in years, slipping 1% between the second quarter and third quarter of 2018, according to the latest report from brokerage Knight Frank.The nearly 6,500-square-foot apartment has sweeping views
                                </p>
                                <div className='video-thumb'>
                                <img src="/src/assets/images/blog/single/02.jpg" alt="" />
                                <a href="https://www.youtube.com/watch?v=PGuKjkdGrEI&t=10400s" className='video-button popup'
                                target='-blank'
                                >
                                <i className='icofont-ui-play'></i>
                                </a>
                                </div>
                                <p>Following years of white-hot growth, luxury home prices in Sydney declined for the first time in years, slipping 1% between the second quarter and third quarter of 2018, according to the latest report from brokerage Knight Frank.The nearly 6,500-square-foot apartment has sweeping views
                                </p>
                                <div className='tags-section'>
                                  <ul className="tags lab-ul">
                                    <li>
                                      <a href="#">Agency</a>
                                    </li>
                                    <li>
                                      <a href="#">Business</a>
                                    </li>
                                    <li>
                                      <a href="#">Personal</a>
                                    </li>
                                   
                                  </ul>
                                  <ul className="lab-ul social-icons">
                                  {
                                   socialList.map((val, i) => (
                                    <li key={i}>
                                      <a href="#" className={val.className}>
                                        <i className={val.iconName}></i>
                                      </a>
                                    </li>
                                   ))
                                  }
                                  </ul>
                                </div>
                              </div>
                            </div>
                         )) 
                        }
                      </div>
                    </div>
                    <br />
                    <div className="navigations-part">
                      <div className="left">
                        <a href="#" className='prev'>
                          <i className="icofont-double-left"></i> Previous Blog
                        </a>
                        <div><a href="#" className='title'> Evisculate Parallel Processes via Technica Sound Models Authoritive</a></div>
                      </div>

                      <div className="right">
                        <a href="#" className='prev'>
                          <i className="icofont-double-right"></i> Previous Blog
                        </a>
                       <a href="#" className='title'> Evisculate Parallel Processes via Technica Sound Models Authoritive</a>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <div className="col-lg-4 col-12">
            <aside>
              <Tags/>
              <PopularPost/>
            </aside>

          </div>
          </div>
          </div> 
      </div>
    </div>
  )
}

export default SingleBlog