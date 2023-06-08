import CollapseBtn from './collapseBtn';
import Controller from './controller';

const btnNode = document.querySelector('.container');

const btn = new CollapseBtn();
btn.insertBtn(btnNode);

const content = 'DropDownText DropDownText DropDownText DropDownText DropDownText DropDownText';
const controller = new Controller(btnNode, content);

btnNode.addEventListener('click', controller.mouseClick);
