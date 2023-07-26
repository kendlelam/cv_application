import '../styles/splitbar.css';

export default function SplitBar({children}) {
    return (
        <div className="split">
            {children}
        </div>
    )
}