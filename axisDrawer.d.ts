export declare class AxesDrawer {
    ctx: CanvasRenderingContext2D | undefined;
    width: number | undefined;
    height: number | undefined;
    constructor();
    setValues(ctx: CanvasRenderingContext2D, width: number, height: number): void;
    /**
     * Draw axes on the canvas
     * @param {CanvasRenderingContext2D} ctx - The 2D rendering context for the canvas
     * @param {number} width - The width of the canvas
     * @param {number} height - The height of the canvas
     */
    drawAxes(ctx: CanvasRenderingContext2D, width: number, height: number): void;
}
//# sourceMappingURL=axisDrawer.d.ts.map