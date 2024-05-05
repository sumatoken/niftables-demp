import { list } from "@vercel/blob"

type Props = {
    fileName: string
} & React.ComponentProps<'video'>

export default async function Video({ fileName, className, ...props }: Props) {
    const { blobs } = await list({
        prefix: fileName,
        limit: 1,
    })
    const { url } = blobs[0]

    return (
        <video className={className} {...props} preload="none" aria-label="Video player">
            <source src={url} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    )
}