import React from 'react'
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'
import "./style.scss"


const PrivacyPolicy = () => {
    return (
        <ContentWrapper>

            <div className='div1'>
                <span className='title'>Privacy Policy</span>

            </div>
            <div className="div2">
                <p className="paragraph" style={{ marginTop: "20px", marginBottom: "20px" }}>Last Updated : 03-06-2023.</p>
                <p className="paragraph">Used or fetched TMDB database.</p>
                <p className="title2">Information Collect</p>
                <p className="paragraph">I do not directly collect any personal information from our users. Any information related to your TMDB account or any other personal data is handled by TMDB. Please refer to TMDB's Privacy Policy for more details on their data handling practices.</p>
                <p className="paragraph"></p>
            </div>
        </ContentWrapper>
    )
}

export default PrivacyPolicy