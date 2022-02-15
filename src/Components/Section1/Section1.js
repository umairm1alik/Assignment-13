import './Section1.css';

function Section1(){
    return(
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-lg-5">
                    <div className="row comp">
                        <div className="col-md-7 ">
                            <p id='world'>World</p>
                            <h3 className='title'>Featured post</h3>
                            <p className='publishDate'>Nov 12</p>
                            <p>This is a wider card with supporting text below as a natural lead-in to a additional content.</p>
                            <p id='reading2'>Continue reading...</p>
                        </div>
                        <div className="col-md-5 thumbnail">
                            <h3>Thumbnail</h3>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="row comp">
                        <div className="col-md-7 ">
                            <p id='design'>Design</p>
                            <h3 className='title'>Post title</h3>
                            <p className='publishDate'>Nov 11</p>
                            <p>This is a wider card with supporting text below as a natural lead-in to a additional content.</p>
                            <p id='reading2'>Continue reading...</p>
                        </div>
                        <div className="col-md-5 thumbnail">
                            <h3>Thumbnail</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section1;