import * as React from "react";
import {Main} from "../../components/layouts";
import classes from './SocialDetail.module.scss';

export default function Home() {
    const data = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("social_detail_data")) : null;
    const date = typeof window !== 'undefined' ? localStorage.getItem("social_detail_data_date") : null;

    return (
        <>
            <Main>
                <div className={classes['social-detail-wrapper']}>
                    <div className={classes['information-block']}>
                            <div className={'max-w-[590px]'}>
                                <span className={classes['title']}>{data?.title ?? ''}</span>
                            </div>

                        <div className={classes['two-field']}>
                                <div className={classes['field-block']}>
                                    <img
                                        src={`/icons/schedule.svg`}
                                        alt="schedule"
                                    />
                                    <span className={classes['title-block']}>{date ?? ''}</span>
                                </div>
                                <div className={classes['field-block']}>
                                    <img
                                        src={`/icons/clock.svg`}
                                        alt="clock"
                                    />
                                    <span className={classes['title-block']}>{data?.startAt ?? ''}</span>
                                </div>
                        </div>

                        <div className={classes['single-field']}>
                                <div className={classes['field-block']}>
                                    <img
                                        src={`/icons/location.svg`}
                                        alt="location"
                                    />
                                    <span className={classes['title-block-smail']}>{data?.venue ?? ''}</span>
                                </div>
                        </div>

                        <div className={classes['two-field']}>
                                <div className={classes['field-block']}>
                                    <img
                                        src={`/icons/ppl.svg`}
                                        alt="capacity"
                                    />
                                    {data?.capacity && <span className={classes['title-block-smail']}>{data.capacity} people</span>}
                                </div>
                                <div className={classes['field-block']}>
                                    <img
                                        src={`/icons/cost.svg`}
                                        alt="cost"
                                    />
                                    {data?.price && <span className={classes['title-block-smail']}>${data.price}</span>}
                                </div>
                        </div>
                    </div>

                    {data?.banner ? (
                        <div>
                            <img
                                className={classes['banner-block']}
                                src={data.banner}
                                alt="banner"
                            />
                        </div>
                    ) : (
                        <div className={classes['banner-block-empty']}>
                            <img
                                src={'/icons/banner.svg'}
                                alt="banner-empty"
                            />
                        </div>
                    )}

                    {data?.description && (
                        <div className={classes['create-form-wrapper']}>
                            <div className="col-span-1">
                                <span className={classes['description-block']}>{data.description}</span>
                            </div>
                        </div>
                    )}

                </div>
            </Main>
        </>
    )
}
