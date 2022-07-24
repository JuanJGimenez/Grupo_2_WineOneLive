import React, {useState, useEffect} from 'react';
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import Footer from './Footer';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'



function ContentWrapper(){

    const [loading, setLoading] = useState(false)
    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        }, 1500)
    }, [])


    return (
        <React.Fragment>
            {
                loading ?
                <ClimbingBoxLoader color={'#5a5c69'} loading={loading} size={23} />
                :
       
            <div id="content-wrapper" className="d-flex flex-column">
             
                <div id="content">
                <TopBar />
                    <ContentRowTop />
                    <Footer />
                </div>
            </div>
            }    
        </React.Fragment>
    )
}
export default ContentWrapper;