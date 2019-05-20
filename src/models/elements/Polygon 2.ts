import IPoint from "../../interfaces/IPoint";
import IRenderProps from "../../interfaces/IRenderProps";
import Element from "./Element";
import RenderingUtils from "../../utils/rendering";

import RENDER_PROPS from "../../constants/RenderProps";
import { string } from "prop-types";
import RENDER_PROPS1 from "../../constants/RenderProps - 2";

export default class Polygon2 extends Element {
  points: IPoint[];
  

  constructor(points: IPoint[]) {
    super();
    this.points = points;
    }

  draw = (context: CanvasRenderingContext2D, renderProps: IRenderProps) => {
    RenderingUtils.renderLine(context, this.points, RENDER_PROPS1.POLYGON_OUTLINE1);
  }
}
