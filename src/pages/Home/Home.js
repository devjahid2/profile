import React from 'react';
import Container from '../../components/container/Container';
import Topbar from '../../layouts/topbar/Topbar';
import ParentCard from '../../components/card/ParentCard';
import Card from '../../components/card/Card';
import RightSide from '../../layouts/rightSide/RightSide';
import useWindowWidth from './../../hooks/useWindowWidth';
import ResponsiveHeader from '../../layouts/responsiveHeader/ResponsiveHeader';

const Home = () => {
    const onSmallScreen = useWindowWidth(991);
    return (
        <Container>
            <div className="row">
                <div className="col-md-8">
                    {
                        onSmallScreen ? <ResponsiveHeader/> : ''
                    }
                    <Topbar/>
                    <ParentCard title={'MARKETTING PROMPTS'}>
                        <Card title={'FACEBOOK SEO GENNERATOR'} description={'CREATE ORGANIC SEO FOR VIDEOS'}/>
                        <Card title={'FACEBOOK SEO GENNERATOR'} description={'CREATE ORGANIC SEO FOR VIDEOS'}/>
                    </ParentCard>

                    <ParentCard title={'SCHOLAR PROMPTS'}>
                        <Card title={'FACEBOOK SEO GENNERATOR'} description={'CREATE ORGANIC SEO FOR VIDEOS'}/>
                        <Card title={'FACEBOOK SEO GENNERATOR'} description={'CREATE ORGANIC SEO FOR VIDEOS'}/>
                    </ParentCard>
                </div>
                <div className="col-md-4">
                    <RightSide/>
                </div>
            </div>
        </Container>
    );
}

export default Home;
