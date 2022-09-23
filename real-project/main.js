// class Component {
//     constructor(tagName, className, id, textContnet) {
//         this.tagName = tagName;
//         this.className = className;
//         this.id = id;

//         this.textContnet = textContnet;
//     }

//     toNode() {
//         const tag = document.createElement(this.tagName);
//         tag.className = this.className;
//         tag.id = this.id;
//         tag.style = `
//             background-color: red ;
//         `;

//         tag.textContent = 'Fuck you';

//         return tag;
//     }

//     static prepend(parentNode, childrenNode) {
//         document.querySelector(parentNode).prepend(childrenNode);
//     }
// }

// const fuck = new Component(
//     'div',
//     'fuck-you',
//     'dummy_shit',
//     ' Hello fucking world '
// ).toNode();

// const button = new Component('button', 'button', 'btn', 'Fuck').toNode();

// Component.prepend('#app', fuck);
// clg
// Component.prepend(`#${fuck.id}`, button);

// console.log('[fuck]', fuck);
