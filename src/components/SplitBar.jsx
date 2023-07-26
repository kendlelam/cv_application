import '../styles/splitbar.css';

export default function SplitBar({children, onClick}) {
    return (
        <div className="split" onClick={onClick}>
            {children}
        </div>
    )
}