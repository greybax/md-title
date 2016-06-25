import remark from 'remark';
import html from "remark-html";
import striptags from 'striptags';

// TODO: Need to move it to helper functions
const isHeader = (node) => {
    return node.type === "heading";
}

// TODO: Need to move it to helper functions
const isLevel = (node, level) => {
    return node.depth === level;
}

const isTitle = node => isHeader(node) && isLevel(node, 1);

export default input => {
    if (!input)
        return;

    let ast = remark().parse(input).children;
    let clonedAst = { type: "root", children: [] };

    for (let i = 0; i < ast.length; i++) {
        if (isTitle(ast[i])) {
            clonedAst.children.push(ast[i]);
            break;
        }
    };

    if (clonedAst.children.length === 0)
        return;

    let md = remark().stringify(clonedAst);
    let dom = remark().use(html).process(md).contents;
    return {
        text: striptags(dom).trim(),
        html: dom.trim(),
        clonedAst
    };
};
