import React from 'react';
import './GalleryLoc.css'

export function GalleryLoc ({list}){

    return <div className="galleryloc-container">
        {list.map(item => (<figcaption className="rick" key={item.id}>
                    <p className="rick-p">{item.name}</p>
                    
        </figcaption>)
                        



        )}
    </div>
}