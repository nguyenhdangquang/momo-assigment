import { Header } from './Header';

import classes from './Layouts.module.scss';

export const Main = (props) => {
    return <div className={classes['layout-container']}>
        <Header />
        {props.children}
    </div>
}
