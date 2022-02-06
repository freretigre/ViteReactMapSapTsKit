import {memo, ReactChild, ReactFragment, ReactPortal, useState} from 'react';
import {Button} from "antd";

import styles from './index.module.scss';


const FormattedMessage = (props: { id: string, lang: string }): JSX.Element => {
    return <Button>{props.id}-{props.lang}</Button>
}

const SelectLang = memo(() => {
    const [locale, setLocale] = useState("zh-CN");

    const changLang = () => {
        if (!locale || locale === 'zh-CN') {
            setLocale('en-US');
        } else {
            setLocale('zh-CN');
        }
    };

    console.log("国际化语言切换: ", locale);

    return (
        <div className={styles.analysis}>
            <div>
                <Button
                    // size="small"
                    type="primary"
                    onClick={() => {
                        changLang();
                    }}
                >
                    国际化语言切换
                </Button>
                <FormattedMessage id="navbar.lang" lang={locale}/>
            </div>
        </div>
    );
});

export default SelectLang;
