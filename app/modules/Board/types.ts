export interface IBoardSize {
  x: number
  y: number
}

export interface IBoardCoord {
  x: number
  y: number
}

export interface IBoardProps {
  size: IBoardSize
  disabled?: boolean
}

export interface IBoardEvents {
  cellClick: [coord: IBoardCoord]
}

export type IShipType = 'sm' | 'md' | 'lg' | 'xl'

export interface IShipProps {
  type: IShipType
}
