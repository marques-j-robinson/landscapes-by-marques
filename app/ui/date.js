import { parse, format } from 'date-fns';

export default function PublishedAt({dateString}) {
    const date = parse(dateString, 'yyyy/MM/dd', new Date())
    return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}
