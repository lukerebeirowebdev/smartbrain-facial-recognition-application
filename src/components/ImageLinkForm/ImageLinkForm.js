import React from 'react';
import './ImageLinkForm.css'


const ImageLinkForm = () => {
    return (
        <div>
            <p className='f3'>{'This Magic Brain Will Detect Faces in your pictures. Give it a try.'}</p>
            <div classNme='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='f4 pa1 w-80 center' type='text' />
                    <button className='pa4 w-30 grow f4 link ph3 pv2 dib white bg-light-purple'><strong>Detect Faces</strong></button>
                </div>
            </div>

        </div>
    );
}

export default ImageLinkForm 