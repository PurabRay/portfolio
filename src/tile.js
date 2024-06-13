import './tile.css';

function Tile({ header, subHeader, img, text, link, linkText, position, bgcolor }) {
    return (
        <div className={`tile ${position} ${bgcolor}`} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', textAlign: 'center' }}>
            <h2>{header}</h2>
            <h3>{subHeader}</h3>
            <div className="img-parent w-1/3">
                <img src={img} alt="tile-img" />
            </div>
            <div className="text">
                <p>{text}</p>
            </div>
            <div className="link-parent">
                <a href={link} className="link">{linkText}</a>
            </div>
        </div>
    );
}

export default Tile;