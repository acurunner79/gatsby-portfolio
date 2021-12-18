import React from 'react' 
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import ReactPlayer from 'react-player'
import { Wrapper } from './style'



const RichText = ({ raw, assetRef }) => {
    // const referencesMap = {}
    // references.forEach((reference) => {
    //     referencesMap[reference.contentful_id] = reference
    // })

    const renderOptions = { 
        renderNode: { 
            [BLOCKS.EMBEDDED_ASSET]: (node) => {
                const asset = assetRef.fixed;

              return (
                <img id="asset-image" src={asset.src} alt={asset.title} />
              );
            },
            [INLINES.HYPERLINK]: (node) => {
                if ((node.data.uri).includes('youtube.com/embed')){
                    return(
                        <ReactPlayer id="blog-embedded-video" url={node.data.uri} controls={true}/>
                    )
                }
            }
        },
    }

    return (
        <Wrapper>
            {documentToReactComponents(JSON.parse(raw), renderOptions)}
        </Wrapper>
    )
}

export default RichText