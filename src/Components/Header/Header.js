import './Header.css';

function Header(){
    return(
        <div className="container header">
            <div className="row">
                <div className="col-md-auto">
                    <h1 id='hHeading'><i>Title of a longer<br/>featured blog post</i></h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-auto">
                    <p id='hPara'>Multiple lines of text that form the lede, informing new<br/>readers quickly and efficiently about what's most<br/>interesting in this post's contents.</p>
                    <p id='reading'>Continue reading...</p>
                </div>
            </div>
        </div>
    );
}
export default Header;