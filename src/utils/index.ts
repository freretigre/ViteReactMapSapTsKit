
interface IinitRemSize {
    callback: Function;
}

export const initRemSize = ({callback}:IinitRemSize) => {
     const getInitRem = () => {
        // 默认的设计稿宽度720px
        let designWidth = 750;
        let mimiDesignWidth = 325;

        const element = document.documentElement;
        // const {getBoundingClientRect} = element;
        /**
            * getBoundingClientRect
            *       bottom: 4278.40625
            *       height: 4278.40625
            *       left: 0
            *       right: 2038
            *       top: 0
            *       width: 2038
            *       x: 0
            *       y: 0
            *       [[Prototype]]: DOMRect
            *           height: 4278.40625
            *           width: 2038
            *           x: 0
            *           y: 0
            */
        if(element.getBoundingClientRect().width > 750){
            designWidth = element.getBoundingClientRect().width;
        }else{
            designWidth = 750;
        }
        const clientWidth = (element.getBoundingClientRect().width) * (designWidth / mimiDesignWidth);
        console.log(clientWidth);
        
        // element.style.fontSize = clientWidth / 100 + "px";
        callback(clientWidth);
     }

     getInitRem();

     window.addEventListener('resize', getInitRem, false);
}