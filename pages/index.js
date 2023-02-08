import { Main } from '../components/layouts';

import classes from './Home.module.scss';

export default function Home() {
  return (
    <>
          <Main>
              <div className={classes['rough-information-wrapper']}>
                  <div className={classes['information-block']}>
                      <div className={classes['title-block']}>
                          <p className={classes['title']}>United Event</p>
                      </div>

                      <div className={classes['two-field']}>
                          <div className={classes['field-block']}>
                              <img
                                  src={`/icons/schedule.svg`}
                                  alt="schedule-supermomos"
                              />
                              <input type="text" name="schedule" className={classes['input-field']} />
                          </div>
                          <div className={classes['field-block']}>
                              <img
                                  src={`/icons/clock.svg`}
                                  alt="clock-supermomos"
                              />
                              <input type="text" name="clock" className={classes['input-field']} />
                          </div>
                      </div>
                      <div className={classes['single-field']}>
                          <div className={classes['field-block']}>
                              <img
                                  src={`/icons/location.svg`}
                                  alt="location-supermomos"
                              />
                              <input type="text" name="location" className={classes['input-field']}/>
                          </div>
                      </div>
                      <div className={classes['two-field']}>
                          <div className={classes['field-block']}>
                              <img
                                  src={`/icons/ppl.svg`}
                                  alt="ppl-supermomos"
                              />
                              <input type="text" name="ppl" className={classes['input-field']} />
                          </div>
                          <div className={classes['field-block']}>
                              <img
                                  src={`/icons/cost.svg`}
                                  alt="cost-supermomos"
                              />
                              <input type="text" name="cost" className={classes['input-field']} />
                          </div>
                      </div>
                  </div>

                  <div className={classes['banner-block']}>
                      <img
                          src={`/icons/banner.svg`}
                          alt="banner-supermomos"
                      />
                      Add a banner
                  </div>
              </div>
              <div className={classes['create-form-wrapper']}>
                  <div className="col-span-1">
                      <div className={classes['description-block']}>
                          <p className="mb-2">Description</p>
                          <textarea id="story" name="story" rows="5" cols="33" placeholder={"Description of your event..."} className={classes['text-area-description']}></textarea>
                      </div>
                      <div className={classes['setting-block']}>
                          <div className="h-[100px] my-4">
                              <div className={classes['setting-title-block']}>
                                  <p className="font-semibold text-purple-200 text-xl">Setting</p>
                              </div>
                              <div className="relative">
                                  <input type="checkbox" id="attend-acceptant" name="attendee" value="accept" className={classes['checkbox-custom']}/>
                                  <span className={classes['label']}>I want to approve attendees</span>
                              </div>
                          </div>
                          <div className="h-[80px] my-4">
                              <p className="my-4">Privacy</p>
                              <div className="flex items-center justify-between">
                                  <div>
                                      <input type="radio" value="public" name="public" className={classes['radio-button-custom']}/>&nbsp;Public
                                  </div>
                                  <div>
                                      <input type="radio" value="audience" name="audience" className={classes['radio-button-custom']}/> &nbsp;Curated Audience
                                  </div>
                                  <div>
                                      <input type="radio" value="community" name="community" className={classes['radio-button-custom']}/>&nbsp;Community Only
                                  </div>
                              </div>
                          </div>
                          <div className="h-[180px] my-4">
                              <p className="my-2">Tag your social</p>
                              <p className="font-light">Pick tags for our curation engine to work its magin</p>
                              <div>
                                  <div className={classes['tag']}>
                                      <p className="text-l text-purple-200">Engineering</p>
                                      <p className="font-thin text-xs">x</p>
                                  </div>
                                  <div className="flex">
                                      <div className={classes['tag-not-pick']}>
                                          <p className="text-l">Product</p>
                                      </div>
                                      <div className={classes['tag-not-pick']}>
                                          <p className="text-l">Marketing</p>
                                      </div>
                                      <div className={classes['tag-not-pick']}>
                                          <p className="text-l">Design</p>
                                      </div>
                                  </div>

                              </div>
                          </div>
                      </div>
                      <button className={classes['create-social-btn']}>CREATE SOCIAL</button>
                  </div>
              </div>
          </Main>
    </>
  )
}
