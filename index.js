import { ast, text, html, isHeading, isDepth } from 'remark-helpers';

const isTitle = node => isHeading(node) && isDepth(node, 1);

export default input => {
    if (!input)
        return;

    let mdast = ast(input).children;
    let clonedMdast = { type: "root", children: [] };

    for (let i = 0; i < mdast.length; i++) {
        if (isTitle(mdast[i])) {
            clonedMdast.children.push(mdast[i]);
            break;
        }
    };

    if (clonedMdast.children.length === 0)
        return;

    return {
        text: text(clonedMdast),
        html: html(clonedMdast),
        clonedMdast
    };
};
