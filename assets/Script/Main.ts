import { _decorator, Component, Node, native } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Main')
export class Main extends Component {
    start() {

    }

    update(deltaTime: number) {
        
    }

    callNative() {
        native.reflection.callStaticMethod("com/cocos/game/Test", "alert", "(Ljava/lang/String;)V", "this is a message from JavaScript");
    }
}

