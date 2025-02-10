// const mediaNodeTemplate = {
//     id,
//     name: 'placeholder',
//     width,
//     height,
//     imageURL,
//     file_extension,
//     is_video,
//     source,
//     tags
// }

const getFileExtension = (url) => {
    return url.split('.').pop().split(/\#|\?/)[0];
}

const convertGatsbyNode = (gatsbyNode) => {
    const nodeExtension = getFileExtension(gatsbyNode.publicURL);
    return {
        id: gatsbyNode.id,
        name: gatsbyNode.name,
        width: gatsbyNode.childImageSharp ? gatsbyNode.childImageSharp.gatsbyImageData.width : null,
        height: gatsbyNode.childImageSharp ? gatsbyNode.childImageSharp.gatsbyImageData.height : null,
        imageURL: gatsbyNode.publicURL,
        file_extension: nodeExtension,
        is_video: (nodeExtension === 'mp4' || nodeExtension === 'webm') ? true : false, 
        source: null,
        tags: null
    }
}

const convertGatsbyNodes = (gatsbyNodes) => {
    const convertedNodes = [];
    gatsbyNodes.forEach(node => {
        convertedNodes.push(convertGatsbyNode(node));
    });
    return convertedNodes;
}

export { convertGatsbyNode, convertGatsbyNodes };