import './Blog.css';

function Blog(){
    return(
        <div className="container">
            <div className="row rowPad">
                <div className="col-md-8">
                    <h3 className='textBold'><i>From the firehouse</i></h3>
                    <hr/>

                    <h1 className='textBold'><i>Sample Blog Post</i></h1>
                    <p className='publishDate'>January 1, 2014 by <span className='text-primary'>Mark</span></p>

                    <p>This blog post shows a few different type of content that's supported and style with Bootstrap.  Basic typography, images and code are all supported. </p>
                    <hr/>

                    <p>When geographers identify a continent, they usually include all the <span className='text-primary'>islands associated with it</span>. Japan, for instance, is part of the continent of Asia. Greenland and all the islands in the Caribbean Sea are usually considered part of North America. A continent is one of Earth’s seven main divisions of land.<br/><br/>
                    Coastlines, however, do not indicate <b>the actual boundaries of the continents</b>. Continents are defined by their continental shelves.<br/><br/>
                    To geographers, continents are also culturally distinct. The continents of Europe and Asia, for example, are actually part of a single, enormous piece of land called Eurasia.   </p>

                    <h1 className='textBold'>Heading</h1>
                    <p>By about 200 million years ago, the forces that helped form Pangaea caused the supercontinent to begin to break apart. The pieces of Pangaea that began to move apart were the beginnings of the continents that we know today. A giant landmass that would become Europe, Asia, and North America separated from another mass that would split up into other continents.</p>

                    <h1 className='textBold'>Sub-heading</h1>
                    <p>The positions of the continents are always changing.<br/><br/>
                    Example code block.<br/><br/>
                    A giant landmass that would become Europe, Asia, and North America separated from another mass that would split up into other continents. In time, Antarctica and Australia, still joined together, broke away and drifted south.</p>

                    <h1 className='textBold'>Sub-heading</h1>
                    <p>A giant landmass that would become Europe, Asia, and North America separated from another mass that would split up into other continents. In time, Antarctica and Australia, still joined together, broke away and drifted south. The small piece of land that would become the peninsula of India broke away and for millions of years moved north as a large island. It eventually collided with Asia.</p>
                    <ul>
                        <li>Zealandia, in the South Pacific Ocean, whose land includes New Zealand and New Caledonia.</li>
                        <li>Madagascar, in the South Indian Ocean.</li>
                        <li>Jan Mayen, in the North Atlantic Ocean, a Norwegian island.</li>
                    </ul>

                    <p>A giant landmass that would become Europe, Asia, and North America separated from another mass that would split up.</p>
                    <ol>
                        <li>Zealandia, in the South Pacific Ocean, whose land includes New Zealand and New Caledonia.</li>
                        <li>Madagascar, in the South Indian Ocean.</li>
                        <li>Jan Mayen, in the North Atlantic Ocean, a Norwegian island.</li>
                    </ol>

                    <p>A giant landmass that would become Europe, Asia, and North America separated from another mass that would split up.</p>

                   
                    <h1 className='textBold'><i>Another Blog Post</i></h1>
                    <p className='publishDate'>December 23, 2014 by <span className='text-primary'>Jacob</span></p>
                    <p>When geographers identify a continent, they usually include all the <span className='text-primary'>islands associated with it</span>. Japan, for instance, is part of the continent of Asia. Greenland and all the islands in the Caribbean Sea are usually considered part of North America. A continent is one of Earth’s seven main divisions of land.<br/><br/>
                    Coastlines, however, do not indicate <b>the actual boundaries of the continents</b>. Continents are defined by their continental shelves.<br/><br/>
                    To geographers, continents are also culturally distinct. The continents of Europe and Asia, for example, are actually part of a single, enormous piece of land called Eurasia.   </p>

                    <h1 className='textBold'><i>New Features</i></h1>
                    <p className='publishDate'>December 14, 2014 by <span className='text-primary'>Chris</span></p>
                    <p>A giant landmass that would become Europe, Asia, and North America separated from another mass that would split up into other continents. In time, Antarctica and Australia, still joined together, broke away and drifted south. The small piece of land that would become the peninsula of India broke away and for millions of years moved north as a large island. It eventually collided with Asia.</p>
                    <ul>
                        <li>Zealandia, in the South Pacific Ocean, whose land includes New Zealand and New Caledonia.</li>
                        <li>Madagascar, in the South Indian Ocean.</li>
                        <li>Jan Mayen, in the North Atlantic Ocean, a Norwegian island.</li>
                    </ul>

                    <p>A giant landmass that would become Europe, Asia, and North America separated from another mass that would split up.</p>

                    <button className='btn' id='btn1'>Older</button>
                    <button className='btn' disabled>Newer</button>

                </div>


                <div className="col-md-4">
                    <div id='box'>
                        <h3>About</h3>
                        <p>
                            A giant landmass that would become Europe, Asia, and North America separated from another mass that would split up into other continents. In time, Antarctica and Australia, still joined together, broke away and drifted south.
                        </p>
                    </div>
                    <div className='bothLists'>
                        <h3>Archives</h3>
                        <ul className='list'>
                            <li>March 2014</li>
                            <li>April 2014</li>
                            <li>May 2014</li>
                            <li>June 2014</li>
                            <li>July 2014</li>
                            <li>August 2014</li>
                            <li>September 2014</li>
                            <li>October 2014</li>
                            <li>November 2014</li>
                            <li>December 2014</li>
                            <li>January 2015</li>
                            <li>February 2015</li>
                        
                        </ul>
                    </div>

                    <div className='bothLists'>
                        <h3>Elsewhere</h3>
                        <ul className='list'>
                            <li>GitHub</li>
                            <li>Twitter</li>
                            <li>Facebook</li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Blog;