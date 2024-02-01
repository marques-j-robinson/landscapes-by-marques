import Image from 'next/image';
import PublishedAt from '@/app/ui/date'
import { fetchPainting } from '@/app/lib/data';

export default async function Detail({ params } : { params: {id: string}}) {
    const painting = await fetchPainting(params.id)
    return (
        <>
            <div className="mb-6">
                <p className="text-3xl font-bold">{painting.title} <span className="text-xl font-normal">{painting.dimensions}</span></p>
                <PublishedAt dateString={painting.published} />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <Image alt={painting.title} src={painting.image} width={500} height={500} />
                <div className="mt-6 lg:mt-0">
                    <p><strong>Description</strong></p>
                    <p>{painting.description}</p>
                </div>
            </div>
        </>
    )
}
