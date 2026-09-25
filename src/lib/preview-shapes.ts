import type { ProductId } from '@/types/company';

/** Geometry for the configurator's illustrative drawings, on a 400 x 340 canvas. */
type Rect = { x: number; y: number; w: number; h: number };

export type PreviewShape = {
  frame: Rect;
  /** Glass panes, filled with the chosen glass colour. */
  panes: Rect[];
  /** Solid profiles drawn over the glass: meeting stiles, rails, mullions. */
  profiles: Rect[];
  /** Thin grid bars as an SVG path, when the product has them. */
  bars?: string;
  handles?: Rect[];
  sill: Rect;
};

export type ShapeId = 'grid' | 'sliding' | 'sash' | 'fixed' | 'garden' | 'bath';

export const PREVIEW_SHAPES: Record<ShapeId, PreviewShape> = {
  grid: {
    frame: { x: 28, y: 28, w: 344, h: 284 },
    panes: [
      { x: 44, y: 44, w: 152, h: 252 },
      { x: 204, y: 44, w: 152, h: 252 },
    ],
    profiles: [{ x: 194, y: 36, w: 12, h: 268 }],
    bars: 'M44 170 H196 M204 170 H356 M120 44 V296 M280 44 V296',
    sill: { x: 16, y: 312, w: 368, h: 12 },
  },
  sliding: {
    frame: { x: 28, y: 40, w: 344, h: 260 },
    panes: [
      { x: 42, y: 54, w: 160, h: 232 },
      { x: 216, y: 54, w: 142, h: 232 },
    ],
    profiles: [{ x: 200, y: 48, w: 16, h: 244 }],
    handles: [{ x: 222, y: 150, w: 5, h: 40 }],
    sill: { x: 16, y: 300, w: 368, h: 12 },
  },
  sash: {
    frame: { x: 100, y: 16, w: 200, h: 300 },
    panes: [
      { x: 114, y: 30, w: 172, h: 128 },
      { x: 114, y: 172, w: 172, h: 130 },
    ],
    profiles: [{ x: 106, y: 156, w: 188, h: 18 }],
    bars: 'M200 30 V158 M114 94 H286 M200 172 V302',
    sill: { x: 88, y: 316, w: 224, h: 10 },
  },
  fixed: {
    frame: { x: 18, y: 30, w: 364, h: 282 },
    panes: [
      { x: 30, y: 42, w: 108, h: 56 },
      { x: 146, y: 42, w: 108, h: 56 },
      { x: 262, y: 42, w: 108, h: 56 },
      { x: 30, y: 106, w: 108, h: 194 },
      { x: 146, y: 106, w: 108, h: 194 },
      { x: 262, y: 106, w: 108, h: 194 },
    ],
    profiles: [
      { x: 26, y: 98, w: 348, h: 8 },
      { x: 138, y: 38, w: 8, h: 266 },
      { x: 254, y: 38, w: 8, h: 266 },
    ],
    sill: { x: 10, y: 312, w: 380, h: 10 },
  },
  garden: {
    frame: { x: 56, y: 12, w: 288, h: 312 },
    panes: [
      { x: 70, y: 26, w: 124, h: 284 },
      { x: 206, y: 26, w: 124, h: 284 },
    ],
    profiles: [{ x: 194, y: 18, w: 12, h: 300 }],
    handles: [{ x: 182, y: 150, w: 6, h: 48 }],
    sill: { x: 40, y: 324, w: 320, h: 8 },
  },
  bath: {
    frame: { x: 112, y: 18, w: 176, h: 304 },
    panes: [
      { x: 126, y: 32, w: 70, h: 276 },
      { x: 204, y: 32, w: 70, h: 276 },
    ],
    profiles: [{ x: 194, y: 24, w: 12, h: 292 }],
    bars: 'M214 170 H264',
    sill: { x: 80, y: 322, w: 240, h: 10 },
  },
};

/** Which drawing represents each configurable product. */
export const PRODUCT_SHAPES: Partial<Record<ProductId, ShapeId>> = {
  'french-window-black': 'grid',
  'sliding-window': 'sliding',
  'sash-window': 'sash',
  'fixed-glass': 'fixed',
  'garden-door': 'garden',
  'bathroom-door': 'bath',
};

export function shapeFor(product: ProductId): ShapeId {
  return PRODUCT_SHAPES[product] ?? 'grid';
}
