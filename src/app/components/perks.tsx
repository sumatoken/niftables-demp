import HorizontalCard from '@ui/horizontal-card'
import Video from '@ui/video'
import Image from 'next/image'
import React from 'react'

const items = [
    {
        title: 'AI Prospects, Market Size, and Development Pace',
        description: 'The AI market is one of the most dynamically growing areas of technology. According to reports, the global AI market is expected to reach $190.61 billion by 2025, with a CAGR (Compound Annual Growth Rate) of 36.6%. The key drivers behind this growth include advancements in machine learning, increasing demand for big data analytics, and growing adoption of AI technology across various sectors such as healthcare, finance, and transportation.',
        imageSrc: '/perk-1.png'
    },
    {
        title: 'AI Tools and Market',
        description: 'AI tools refer to the technologies and software that enable computer systems to perform tasks usually requiring human intellect. The market for these tools is dynamic and diverse, encompassing areas such as Natural Language Processing (NLP), machine learning, computer vision, and robotics. With a wide range of applications, AI tools are becoming increasingly indispensable in many sectors, from healthcare to finance, retail, manufacturing, and many others.',
        imageSrc: '/perk-2.png'
    },
    {
        title: 'AI, Crypto, and NFT Market',
        description: 'Artificial Intelligence and blockchain technology are two groundbreaking areas leading new technological innovations. The combination of these two technologies creates intriguing possibilities. For instance, Non-Fungible Tokens (NFTs) can leverage AI to create unique digital artworks or to provide exclusive AI-based services. Meanwhile, cryptocurrencies can benefit from AI by improving security mechanisms, transaction efficiency, and service personalization. Such combination brings substantial benefits for both developers and users, paving the way for unprecedented possibilities.',
        imageSrc: '/perk-3.png'

    }

]

const Background = () => {
    return (
        <div className="-z-50 absolute top-0 min-w-[100vw] left-1/2 transform -translate-x-1/2 w-full h-full">
            <Video fileName='roadmap-video-AcqbnQs1OMXtda0IxYHy3Z2AxcuKpn' autoPlay playsInline loop muted className='absolute top-0 left-0 w-full h-full object-cover' />
            <div className="absolute top-0 left-0 min-w-[100vw] h-full bg-gradient-to-t from-blue from-0% to-purple to-100% mix-blend-soft-light">
            </div>
            <div className="absolute top-0 left-0 min-w-[100vw] h-full bg-gradient-to-t from-black/0 from-0% to-black/100 to-100%">
            </div>
            <div className="absolute top-0 left-0 min-w-[100vw] h-full bg-gradient-to-b from-black/0 from-0% to-black/100 to-100%">
            </div>
        </div>
    )
}

export default function Perks() {
    return (
        <section className='relative mi-w-[100vw] min-h-screen px-10 md:px-[120px] lg:px-[40px] xl:px-[40px]'>
            <Background />
            <div className="flex flex-col gap-2 md:gap-[20px]">
                {items.map(item => (
                    <HorizontalCard key={item.title} title={item.title} description={item.description} imageSrc={item.imageSrc} />
                ))}
            </div>
        </section>
    )
}
