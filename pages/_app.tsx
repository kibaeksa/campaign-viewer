import * as React from 'react';
import { RootState } from '../reducers';
import { useSelector } from 'react-redux';
import AppLayout from "../components/AppLayout";
import Helmet from "react-helmet";
import wrapper from '../store/configureStore';
import '../assets/index.scss';
import Card from '../components/Card';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const campaignViewer = ({ Component, pageProps }) => {
    const { isAddingData } = useSelector((state: RootState) => state.post);
    const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '30%',
            '& > * + *': {
                marginLeft: theme.spacing(2),
            },
        },
        }),
    );
    const classes = useStyles();
    const helmets = (
        <Helmet
            title="Campaign-veiwer"
            description="캠페인 뷰어"
            htmlAttributes={{ lang: "ko" }}
            meta={[
                {
                charset: "UTF-8",
                },
                {
                name: "viewport",
                content:
                    "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=yes,viewport-fit=cover",
                },
                {
                "http-equiv": "X-UA-Compatible",
                content: "IE=edge",
                },
                {
                name: "description",
                content: "Campaign-veiwer",
                },
                {
                name: "og:title",
                content: "Campaign-veiwer",
                },
                {
                name: "og:description",
                content: "Campaign-veiwer",
                },
                {
                property: "og:type",
                content: "website",
                },
                {
                property: "og:image",
                content: "http://campaign-viewer.herokuapp.com/favicon.ico",
                },
            ]}
            link={[
                {
                    rel: "stylesheet",
                    href: "/css/reset.css",
                },
            ]}
            script={[
                {
                    src: '/js/jquery-1.12.4.min.js',
                },
                {
                    src: '/js/slick.min.js',
                },
            ]}
        />
    );

    
    // 해당 페이지들 네비게이션 및 글쓰기 UI 삭제.
    const pagePropsValue = ( pageProps && pageProps.pathname );
    return pagePropsValue ==='/About'
    ?
        (
            <>
                {helmets}
                <Component {...pageProps} />
            </>
        )
    :
        (
            <>
                {helmets}
                <AppLayout>
                    { isAddingData==true ? 
                        <div className={classes.root}>
                            <CircularProgress />
                        </div>
                        : <Component {...pageProps} />
                    }
                    <Card />
                </AppLayout>
            </>
        )
};



export default wrapper.withRedux(campaignViewer);

