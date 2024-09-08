import TotalBalancebox from "./TotalBalancebox";
const HeaderBox = ({type, title, subtext, user}:HeaderBoxProps)=>{
    return (
        <div className="header-box">
            <h1 className="header-box-title">
                {title}
                {type ==="greeting" && (
                    <span className='text-blue-600 font-semibold' >&nbsp;{user}</span>
                )}
            </h1>
            <p className="header-box-subtext mb-9">{subtext}</p>
            <TotalBalancebox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={2128}
            />
        </div>
    )
}

export default HeaderBox;