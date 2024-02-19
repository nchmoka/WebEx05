//import { ColumnsBlock, ImageBlock, TitleBlock } from "../classes/block"
const tempStr = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit ipsa quasi exercitationem rem dignissimos. Ipsam cumque consectetur illo voluptates dolores est itaque rerum minima voluptatibus excepturi? Quisquam ducimus velit voluptatum!";
const model = [
    new TitleBlock("Hello, Braude !"),
    new TextBlock(tempStr),
    new ColumnsBlock([
        tempStr,
        tempStr,
        tempStr
    ]),
    new ImageBlock("assets/braude.jpg")
] /* `
const model = [
    {
        type: "title",
        data: "Hello, Braude !"
    },
    {
        type: "text",
        data:tempStr,
    },
    {
        type: "columns",
        data: [tempStr, tempStr, tempStr]
    },
    {
        type: "image",
        data: "assets/braude.jpg"
    }
] */ ;

