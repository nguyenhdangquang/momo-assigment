import * as React from 'react';
import { Main } from '../components/layouts';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import { useDataContext } from '../contexts';
import {useRouter} from "next/router";
import classes from './Home.module.scss';

const banners = ['https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_1.jpg',
    'https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_2.jpg',
    'https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_3.jpg',
    'https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_4.jpg',
    'https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_5.jpg',
    'https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_6.jpg',
    'https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_7.jpg',
    'https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_8.jpg',
    'https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_9.jpg',
    'https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_10.jpg']

export default function Home() {
    const route = useRouter();

    const [show, setShow] = React.useState(false);
    const [tagPick, setTagPick] = React.useState([{
        text: 'Engineering',
        isSelected: true
    }, {
        text: 'Product',
        isSelected: false
    }, {
        text: 'Marketing',
        isSelected: false
    }, {
        text: 'Design',
        isSelected: false
    }])
    const { dispatch } = useDataContext();
    const [banner, setBanner] = React.useState('');
    const [bannerTmp, setBannerTmp] = React.useState('');
    const [body, setBody] = React.useState({
        title: '',
        date: '',
        startAt: '',
        venue: '',
        capacity: 0,
        price: 0,
        description: '',
        isManualApprove: false,
        privacy: '',
        banner: '',
        tags: ['Engineering']
    });
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleCreateBodyParam = (type, value) => {
        const bodyCloned = body;
        if (type === 'isManualApprove') {
            bodyCloned[`${type}`] = !bodyCloned[`${type}`];
        } else {
            bodyCloned[`${type}`] = value;
        }
        setBody(bodyCloned);
    }

    const handleRemoveTag = (tag) => () => {
        const findTag = tagPick.find(tagP => tag.text === tagP.text);
        findTag.isSelected = false;
        setTagPick([...tagPick.filter(tagI => tagI.text !== tag.text), findTag])
        handleCreateBodyParam('tags', [...tagPick.filter(tagI => tagI.text !== tag.text), findTag].filter(tagK => tagK.isSelected).map(tagM => tagM.text))
    }

    const handleAddTag = (tag) => () => {
        const findTag = tagPick.find(tagP => tag.text === tagP.text);
        findTag.isSelected = true;
        setTagPick([...tagPick.filter(tagI => tagI.text !== tag.text), findTag])
        handleCreateBodyParam('tags', [...tagPick.filter(tagI => tagI.text !== tag.text), findTag].filter(tagK => tagK.isSelected).map(tagM => tagM.text))
    }

    const handleSetBanner = () => {
        setBanner(bannerTmp);
        handleCreateBodyParam('banner', bannerTmp)
        setShow(false)
    }

    const handleCreateSocial = () => {
        localStorage.removeItem("social_detail_data");
        localStorage.removeItem("social_detail_data_date");

        //calling api
        axios.post('https://1p8s3jhf8j.execute-api.us-east-1.amazonaws.com/Supermomos/interview/social', body)
            .then(function (response) {
                // handle success
                dispatch({
                    action: 'CREATE_SOCIAL_PAGE',
                    payload: response.data
                })
                localStorage.setItem("social_detail_data", JSON.stringify(response.data));
                localStorage.setItem("social_detail_data_date", body.date);
                route.push('/social')
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }

  return (
    <>
          <Main>
              <div className={classes['rough-information-wrapper']}>
                  <div className={classes['information-block']}>
                      <div className={classes['title-block']}>
                          <input type="text" name="name"  className={classes['title']} placeholder="United Event" onChange={(e) => handleCreateBodyParam('title', e.currentTarget.value)}/>
                      </div>

                      <div className={classes['two-field']}>
                          <div className={classes['field-block']}>
                              <img
                                  src={`/icons/schedule.svg`}
                                  alt="schedule-supermomos"
                              />
                              <input type="text" name="date" className={classes['input-field']} onChange={(e) => handleCreateBodyParam('date', e.currentTarget.value)}/>
                          </div>
                          <div className={classes['field-block']}>
                              <img
                                  src={`/icons/clock.svg`}
                                  alt="clock-supermomos"
                              />
                              <input type="text" name="clock" className={classes['input-field']} onChange={(e) => handleCreateBodyParam('startAt', e.currentTarget.value)}/>
                          </div>
                      </div>
                      <div className={classes['single-field']}>
                          <div className={classes['field-block']}>
                              <img
                                  src={`/icons/location.svg`}
                                  alt="location-supermomos"
                              />
                              <input type="text" name="location" className={classes['input-field']} onChange={(e) => handleCreateBodyParam('venue', e.currentTarget.value)}/>
                          </div>
                      </div>
                      <div className={classes['two-field']}>
                          <div className={classes['field-block']}>
                              <img
                                  src={`/icons/ppl.svg`}
                                  alt="ppl-supermomos"
                              />
                              <input type="text" name="ppl" className={classes['input-field']} onChange={(e) => handleCreateBodyParam('capacity', e.currentTarget.value)} />
                          </div>
                          <div className={classes['field-block']}>
                              <img
                                  src={`/icons/cost.svg`}
                                  alt="cost-supermomos"
                              />
                              <input type="text" name="cost" className={classes['input-field']} onChange={(e) => handleCreateBodyParam('price', e.currentTarget.value)}/>
                          </div>
                      </div>
                  </div>

                  <div className={classes['banner-block']}>
                      <img
                          src={banner ? banner : '/icons/banner.svg'}
                          alt="banner-supermomos"
                          className={classes['banner']}
                          onClick={handleShow}
                      />
                      {
                          !banner && <button onClick={handleShow}>
                              Add a banner
                          </button>
                      }
                      <Modal show={show} onHide={handleClose} size="lg">
                          <Modal.Header closeButton>
                              <Modal.Title>Choose a banner</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                              <div className={classes['banner-wrapper']}>
                                  {
                                      banners.map(banner => {
                                          return (
                                              <img key={banner} alt="" src={banner} className={classes['image-banner']} onClick={() => setBannerTmp(banner)}/>
                                          )
                                      })
                                  }
                              </div>
                          </Modal.Body>
                          <Modal.Footer>
                              <button onClick={handleClose}>
                                  Close
                              </button>
                              <button className={classes['save-change-modal-btn']} onClick={handleSetBanner}>
                                  Save
                              </button>
                          </Modal.Footer>
                      </Modal>
                  </div>
              </div>
              <div className={classes['create-form-wrapper']}>
                  <div className="col-span-1">
                      <div className={classes['description-block']}>
                          <p className="mb-2">Description</p>
                          <textarea id="story" name="story" rows="5" cols="33" placeholder={"Description of your event..."} className={classes['text-area-description']} onChange={(e) => handleCreateBodyParam('description', e.currentTarget.value)}></textarea>
                      </div>
                      <div className={classes['setting-block']}>
                          <div className="h-[100px] my-4">
                              <div className={classes['setting-title-block']}>
                                  <p className="font-semibold text-purple-200 text-xl">Setting</p>
                              </div>
                              <div className="relative">
                                  <input type="checkbox" id="attend-acceptant" name="attendee" value="accept" className={classes['checkbox-custom']} onChange={(e) => handleCreateBodyParam('isManualApprove', e.currentTarget.value)}/>
                                  <span className={classes['label']}>I want to approve attendees</span>
                              </div>
                          </div>
                          <div className="h-[80px] my-4">
                              <p className="my-4">Privacy</p>
                              <div className="flex items-center justify-between">
                                  <div>
                                      <input type="radio" value="Public" name="privacy" className={classes['radio-button-custom']} onClick={(e) => { handleCreateBodyParam('privacy', e.currentTarget.value)}}/>&nbsp;Public
                                  </div>
                                  <div>
                                      <input type="radio" value="Curated Audience" name="privacy" className={classes['radio-button-custom']} onClick={(e) => handleCreateBodyParam('privacy', e.currentTarget.value)}/> &nbsp;Curated Audience
                                  </div>
                                  <div>
                                      <input type="radio" value="Community Only" name="privacy" className={classes['radio-button-custom']} onClick={(e) => handleCreateBodyParam('privacy', e.currentTarget.value)}/>&nbsp;Community Only
                                  </div>
                              </div>
                          </div>
                          <div className="h-[180px] my-4">
                              <p className="my-2">Tag your social</p>
                              <p className="font-light">Pick tags for our curation engine to work its magin</p>
                              <div>
                                  <div className="flex">
                                      {
                                          tagPick.filter(tag => tag.isSelected).map((tag, index) => {
                                              return <div className={classes['tag']} key={index} onClick={handleRemoveTag(tag)}>
                                                  <p className="text-l text-purple-200">{tag.text}</p>
                                                  <p className="font-thin text-xs">x</p>
                                              </div>
                                          })
                                      }
                                  </div>
                                  <div className="flex">
                                      {
                                          tagPick.filter(tag => !tag.isSelected).map((tag, idx) => {
                                              return <div className={classes['tag-not-pick']} key={idx} onClick={handleAddTag(tag)}>
                                                  <p className="text-l">{tag.text}</p>
                                              </div>
                                          })
                                      }
                                  </div>
                              </div>
                          </div>
                      </div>
                      <button className={classes['create-social-btn']} onClick={handleCreateSocial}>CREATE SOCIAL</button>
                  </div>
              </div>
          </Main>
    </>
  )
}
