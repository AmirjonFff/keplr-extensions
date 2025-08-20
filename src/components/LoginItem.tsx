import { Link } from "react-router";

interface LoginItemProps {
    title: string;
    desc: string;
    svg: React.ReactNode;
    btnTitle: string;
    btnNum: string;
}

export default function LoginItem({ title, desc, svg, btnTitle, btnNum }: LoginItemProps) {

    return (
        <div className="column">
            <div className="welcome__column-title">{title}</div>
            <div className="welcome__column-desc">
                {desc}
            </div>
            <Link to="/phrase" className={`btn btn--${btnNum} welcome__column-btn`}>
                {svg}
                <span>{btnTitle}</span>
            </Link>
        </div>
    )
}