import Card from '@ui/card'
import React from 'react'

const items = [{
    title: 'token',
    subTitle: "The Gateway token to the world of AI",
    description: 'Set to debut in the latter half of 2024, the CREON token serves as the pioneering link between cutting-edge AI initiatives and blockchain technology. This innovative token provides NFT and token holders with unparalleled access to our Launchpad, AI tools, and exclusive pre-launch investment prospects.',
    imageSrc: '/coming-soon-1.png'
},
{
    title: 'revenue',
    subTitle: "Driving income and growth through decentralization",
    description: 'CREON NFT and token holders are integral participants in the profit-sharing from our launched AI-based enterprises. We support the development of AI tools, ensuring a steady revenue stream, all while allowing early investors to enjoy the benefits of their support.',
    imageSrc: '/coming-soon-2.png'
},
{
    title: 'launchpad',
    subTitle: "Driving the future of AI Innovation",
    description: 'The Creon AI Launchpad, an essential component of our initiative, represents a groundbreaking opportunity in the realm of AI and blockchain. It provides the first known platform for acquiring allocations in tokenized AI projects, offering our community of NFT and CREON token holders early access to innovative and promising AI endeavors.',
    imageSrc: '/coming-soon-3.png'
}
]

export default function ComingSoon() {
    return (
        <section className='relative max-w-[100vw] min-h-screen px-10 md:px-[120px] lg:px-[140px] xl:px-[240px] flex flex-col xl:flex-row items-center justify-center gap-12 md:gap-[40px]'>
            {items.map(item => (
                <Card key={item.title} title={item.title} subTitle={item.subTitle} description={item.description} imageSrc={item.imageSrc} />
            ))}
        </section>
    )
}
