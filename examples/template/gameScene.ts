export abstract class GameScene {

    protected abstract initObjects() : any;
    protected abstract initRender(): any;
    protected abstract initItems(): any;

    public startScene(): void {
        console.log("Start Scene")
        this.initObjects()
        this.initRender()
        this.initItems()
    }
}