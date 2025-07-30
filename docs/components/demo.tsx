import './style.css'
export default function Demo({ url }: { url?: string }) {
    return (
        <div className='demo'>
            <iframe src={`https://demo.flow.luk3d.com${url ?? ''}`} frame-border="0"></iframe>
        </div>
    )
}