import '../styles/header.css';
import SplitBar from './SplitBar';

export default function Header({children}){
    return (
        <div className='header'>
            <SplitBar>
                {children}
            </SplitBar>
        </div>
    )
}