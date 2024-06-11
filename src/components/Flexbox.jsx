import './Components.css'

export default function Flexbox({
    fG,
    fB,
    fD,
    justifyContent,
    alignItems,
    gap=0,
    pl=0,
    pr=0,
    pt=0,
    pb=0,
    mediaClass,
    children
}) {
    return (
        <div className={mediaClass} style={{
            display: 'flex',
            flexGrow: fG,
            flexBasis: `${fB}%`,
            flexDirection: fD,
            justifyContent: justifyContent,
            alignItems: alignItems,
            gap: gap,
            padding: `${pt}px ${pr}px ${pb}px ${pl}px`,
        }}>
            {children}
        </div>
    )
}