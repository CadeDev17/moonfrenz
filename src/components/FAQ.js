import React, { useState } from 'react';
import Content from './Content';

function FAQ () {
    const [faqs, setfaqs] = useState([
        {
            question: 'What blockchain network is Moon Frenz on?',
            answer: 'Ethereum Mainnet, all hail lord Vitalik',
            open: false
        },
        {
            question: 'How much is one Moon Frenz NFT?',
            answer: 'One fren will only be 0.015 ETH <3',
            open: false
        },
        {
            question: 'How many Moon Frenz will be available for the pre/public sale?',
            answer: '3,333 Moon Frenz will be stealth dropped from our main Twitter page. Make sure you follow us to become frenz :)',
            open: false
        },
        {
            question: 'How to mint a Moon Frenz NFT?',
            answer: 'come on... do you really not know how to mint and NFT from a website yet?',
            open: false
        },
        {
            question: 'Is there a limit per wallet?',
            answer: '3 frenz per wallet',
            open: false
        },
        {
            question: 'Are Moon Frenz affiliated with Moonbirds or VeeFriends?',
            answer: 'No, just frenz',
            open: false
        },
        {
            question: 'Is there a roadmap for Moon Frenz?',
            answer: 'No, you dont give frenz a roadmap. We just want to expand our group of frenz and vibe to the wave of the market',
            open: false
        }
    ]);

    const toggleFAQ = index => {
        setfaqs(faqs.map((faq, i) => {
            if (i === index) {
                faq.open = !faq.open
            } else {
                faq.open = false;
            }

            return faq;
        }))
    }



    return (
        <div className="App">
            <div className="faqs">
                {faqs.map((faq, i) => (
                    <Content faq={faq} index={i} toggleFAQ={toggleFAQ} />
                ))}
            </div>
        </div>
    );
}

export default FAQ