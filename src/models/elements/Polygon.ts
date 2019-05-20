import IPoint from "../../interfaces/IPoint";
import IRenderProps from "../../interfaces/IRenderProps";
import Element from "./Element";
import RenderingUtils from "../../utils/rendering";

import RENDER_PROPS from "../../constants/RenderProps";
import { string } from "prop-types";

export default class Polygon extends Element {
  points: IPoint[];
  borderOutline: any;

  constructor(points: IPoint[], borderOutline: any) {
    super();
    this.points = points;
    this.borderOutline = {
    OUTLINE: { border: { color: 'black', width: 1 }, close: true },
  };}

  draw = (context: CanvasRenderingContext2D, renderProps: IRenderProps) => {
    RenderingUtils.renderLine(context, this.points, this.borderOutline.OUTLINE);
  }
}
