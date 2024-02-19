import { ColumnsBlock, ImageBlock, TitleBlock , TextBlock} from "../classes/block"
import myImage from '../assets/braude.jpg'

const tempStr = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit ipsa quasi exercitationem rem dignissimos. Ipsam cumque consectetur illo voluptates dolores est itaque rerum minima voluptatibus excepturi? Quisquam ducimus velit voluptatum!'

export const model  = [
    new TitleBlock("Hello, Braude !"),
    new TextBlock(tempStr),
    new ColumnsBlock([tempStr, tempStr, tempStr]),
    new ImageBlock(myImage)
]