import '../styles/resumesection.css'

export default function ResumeSection({title, children}) {
    return (
        <div className="border">
            <div className="title">{title}</div>
            <div className="content">
                {children}
            </div>
            
        </div>
    )
}