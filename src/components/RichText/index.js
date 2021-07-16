import React from 'react' 
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Wrapper } from './style'


export const RichText = ({raw, references = []}) => {
    const referencesMap = {}
    references.forEach((reference) => {
        referencesMap[reference.contentful_id] = reference
    })

    return (
        <Wrapper>
            {documentToReactComponents(JSON.parse(raw))}
        </Wrapper>
    )
}