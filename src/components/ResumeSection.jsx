import '../styles/resumesection.css'

export default function ResumeSection({title, children}) {
    return (
        <div class="border">
            <div className="title">{title}</div>
            <div className="content">
                {children}
            </div>
            
        </div>
    )
}